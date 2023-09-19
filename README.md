# create a new repository on the command line

echo "# barossalegends.com_v1_parcel" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:trinhphanminhtri/barossalegends.com_v1_parcel.git
git push -u origin main

# push an existing repository from the command line

git remote add origin git@github.com:trinhphanminhtri/barossalegends.com_v1_parcel.git
git branch -M main
git push -u origin main
