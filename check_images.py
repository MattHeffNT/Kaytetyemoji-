"""
Original script from Sam Lavigne aka Antiboredom https://github.com/antiboredom
that uses the csv file to generate the paths to the emojis and audio
in a json file. As well as converts the image to a base64 uri.

"""

import base64
import csv
# import glob
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
        if not row['phrases']:
            # skip empty lines
            row['phrases'] = ""
        #     continue
        # if not row['phrases_kaytetye']:
        #     continue
        # if not row['phrases_english']:
        #     continue

        """generates the uri"""
        with open("./public/assets/emojis/" + row["file"], "rb") as imagefile:
            imgdata = base64.b64encode(imagefile.read()).decode("utf8")

        if row['phrases'] == "":
            item = {
                "name": row["name"],
                "name_kaytetye": row["name_kaytetye"],
                "file": "../assets/emojis/" + row["file"],
                "data": imgdata,
                "audio": "../assets/audio/" + row["audio"],
                "phrases": "",
                "phrases_kaytetye": row["phrases_kaytetye"],
                "phrases_english": row["phrases_english"]
            }
            if row["audio"] != "" and not os.path.exists(
                "../assets/audio/%s" % row["audio"]
            ):
                print("missing %s" % row["audio"])
            else:
                item["audio"] = "./src/assets/audio/" + row["audio"]
            out["emojis"].append(item)
        else:
            item = {
                "name": row["name"],
                "name_kaytetye": row["name_kaytetye"],
                "file": "../assets/emojis/" + row["file"],
                "data": imgdata,
                "audio": "../assets/audio/" + row["audio"],
                "phrases": "../assets/phrases/" + row["phrases"],
                "phrases_kaytetye": row["phrases_kaytetye"],
                "phrases_english": row["phrases_english"]
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
