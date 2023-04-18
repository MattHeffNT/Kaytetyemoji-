#!/bin/zsh

# Get the input image file path from the command-line argument
INPUT_IMAGE="$1"

# Directory to save the output images and Contents.json file
OUTPUT_DIRECTORY="resource"

# Define the output sizes and filenames
SIZES=("58x58" "87x87" "120x90" "180x135" "58x58" "134x100" "148x110" "1024x1024" "54x40" "81x60" "64x48" "96x72" "1024x768")
NAMES=("icon58x58" "icon87x87" "icon120x90" "icon180x135" "icon58x58" "icon134x100" "icon148x110" "icon1024x1024" "icon54x40" "icon81x60" "icon64x48" "icon96x72" "icon1024x768")

# Loop through the output sizes and resize the image
for ((i=1; i<=${#SIZES[@]}; i++)); do
  SIZE=${SIZES[$i]}
  NAME=${NAMES[$i]}
  OUTPUT_IMAGE="${OUTPUT_DIRECTORY}/${NAME}.png"
  convert "${INPUT_IMAGE}" -resize "${SIZE}!" -background white -alpha remove -alpha off "${OUTPUT_IMAGE}"
done

# Generate the Contents.json file
echo '{' > "${OUTPUT_DIRECTORY}/Contents.json"
echo '  "images" : [' >> "${OUTPUT_DIRECTORY}/Contents.json"
for ((i=1; i<=${#SIZES[@]}; i++)); do
  SIZE=${SIZES[$i]}
  NAME=${NAMES[$i]}
  SCALE="1x"
  if [[ $NAME == *@2x* ]]; then
    SCALE="2x"
  fi
  if [[ $NAME == *@3x* ]]; then
    SCALE="3x"
  fi
  echo '    {' >> "${OUTPUT_DIRECTORY}/Contents.json"
  echo "      \"size\" : \"$SIZE\"," >> "${OUTPUT_DIRECTORY}/Contents.json"
  echo '      "idiom" : "universal",' >> "${OUTPUT_DIRECTORY}/Contents.json"
  echo "      \"filename\" : \"$NAME.png\"," >> "${OUTPUT_DIRECTORY}/Contents.json"
  echo "      \"scale\" : \"$SCALE\"" >> "${OUTPUT_DIRECTORY}/Contents.json"
  if [[ $i == ${#SIZES[@]} ]]; then
    echo '    }' >> "${OUTPUT_DIRECTORY}/Contents.json"
  else
    echo '    },' >> "${OUTPUT_DIRECTORY}/Contents.json"
  fi
done
echo '  ]' >> "${OUTPUT_DIRECTORY}/Contents.json"
echo '}' >> "${OUTPUT_DIRECTORY}/Contents.json"

echo "Conversion and Contents.json generation complete!"
