"""
Script by Sam Lavigne aka Antiboredom https://github.com/antiboredom
that uses the csv file to generate the paths to the emojis and audio in a json file.
as well as converts the image to a base64 uri.

"""

import base64
import csv
import glob
import json
import os

ios_path = "ios/indigemoji/Images.xcassets/{}.imageset/{}.png"
ios_sticker_path = "ios/IndigemojiStickers/Stickers.xcassets/Sticker Pack.stickerpack/{}.sticker/{}.png"

out = {"emojis": []}

with open("./emojis.csv", "r") as infile:
    reader = csv.DictReader(infile)
    for row in reader:
        if not row['file']:
            # skip empty lines
            continue
        if not row['audio']:
            # skip empty lines
            continue
        with open("./src/assets/emojis/" + row["file"], "rb") as imagefile:
            imgdata = base64.b64encode(imagefile.read()).decode("utf8")

        # NEED TO ADD PHRASE ROW
        item = {
            "name": row["name"],
            "name_kaytetye": row["name_kaytetye"],
            "file": "../assets/emojis/" + row["file"],
            "data": imgdata,
            "audio": "../assets/audio/" + row["audio"]
        }
        if row["audio"] != "" and not os.path.exists(
            "../assets/audio/%s" % row["audio"]
        ):

            print("missing %s" % row["audio"])
        else:
            item["audio"] = "./src/assets/audio/" + row["audio"]
        out["emojis"].append(item)

with open("./src/assets/emojis.json", "w") as outfile:
    json.dump(out, outfile, indent=2)
