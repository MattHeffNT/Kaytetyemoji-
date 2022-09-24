"""
Script by Sam Lavigne aka Antiboredom https://github.com/antiboredom
that uses the csv file to generate the paths to the emojis and audio in a json file.
as well as converts the image to a base64 uri.

"""


import glob
import json
import os
import csv
import base64

ios_path = "ios/indigemoji/Images.xcassets/{}.imageset/{}.png"
ios_sticker_path = "ios/IndigemojiStickers/Stickers.xcassets/Sticker Pack.stickerpack/{}.sticker/{}.png"

out = {"emojis": []}

with open("./emojis.csv", "r") as infile:
    reader = csv.DictReader(infile)
    for row in reader:
        with open("./src/assets/emojis/" + row["file"], "rb") as imagefile:
            imgdata = base64.b64encode(imagefile.read()).decode("utf8")
        item = {
            "name": row["name"],
            "name_arrernte": row["name_arrernte"],
            "file": row["file"],
            "data": imgdata,
        }

        if row["audio"] != "" and not os.path.isfile(
            "./src/assets/audio/%s" % row["audio"]
        ):
            print("missing %s" % row["audio"])
        else:
            item["audio"] = row["audio"]
        out["emojis"].append(item)

with open("./src/assets/emojis.json", "w") as outfile:
    json.dump(out, outfile, indent=2)
