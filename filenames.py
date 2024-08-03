import os

folder_path = "./android/app/src/main/res/raw/"  # Replace this with the path to your folder

# List all files in the specified directory
files = os.listdir(folder_path)

# Iterate through the files
for file in files:
    if file.endswith(".mp3"):
        file_parts = os.path.splitext(file)
        new_name =  "audio" + file_parts[0][3:] + file_parts[1]  # Rename according to "audio_name.mp3"


        os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_name))
        print(f"Renamed: {file} -> {new_name}")

        # else:
        #     print(f"No '-' found in the file: {file}")

# Iterate through the files
# for file in files:
#     if  file.startswith("0") or file.startswith("1") and file.endswith(".mp3"):
#         # Split the filename into prefix and extension
#         file_parts = os.path.splitext(file)


#         new_name =  "audio" + file_parts[0][3:] + file_parts[1]  # Rename according to "audio_name.mp3"

#     for char in file:
#         if char == "-":
#             new_name += "_"
#         else:
#             new_name += char

        
        # Rename the file
        # os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_name))
        # print(f"Renamed: {file} -> {new_name}")

    # print (new_name)
    # elif "-" in file:
    #         new_name = file.replace("-", "_")
    #         os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_name))
    #         print(f"Renamed: {file} -> {new_name}")
    # else:
    #         print(f"No '-' found in the file: {file}")
       
        # Rename the file
        # os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_name))
        # print(f"Renamed: {file} -> {new_name}")
