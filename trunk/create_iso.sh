
set -x

curdate=`date +%F---%H-%M`

echo $curdate

cd source 

find . -type f -print0 | xargs -0 md5sum | tee md5sum.txt

cd ..

time mkisofs -o xenfire-${curdate}.iso -b boot/stage2_eltorito -c isolinux/boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table -r -V "Custom Ubuntu ${curdate}" -cache-inodes -J -l extracted-cd
