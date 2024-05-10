# 正規表現

## sed (stream editor) 基本

```
$ cat sample.csv
aaa bbbb ccccc dddddd
aaa bbbb ccccc dddddd
aaa bbbb ccccc dddddd
# aaa を aaa-xxx
$ sed s/aaa/aaa-xxx/g sample.csv
aaa-xxx bbbb ccccc dddddd
aaa-xxx bbbb ccccc dddddd
aaa-xxx bbbb ccccc dddddd
```

## 複数の条件を指定（否定的先読み）

```
sed -E -e 's/[0-9A-Z#-]{5}/XXXXX/g' sample.txt
sed -E -e 's/[0-9A-Z#-]{5,}/XXXXX/g' sample.txt
sed -E -e 's/[0-9A-Z#-]{9}/XXXXX/g' sample.txt
sed -E -e 's/([0-9A-Z#-]{9})/XXXXX/g' sample.txt
sed -E -e 's/([0-9A-Z#-]{9})([0-9A-Z#-]{10})/XXXXX/g' sample.txt
```

sed -E -e '![0-9A-Z#-]{9}' \
-e 's/[0-9A-Z#-]{5,}/XXXXX/g' sample.txt

sed -E

awk '{ for (i=1; i<=NF; i++) if ($i !~ /ccc12345/ && length($i) >= 5 && $i ~ /^[[:alnum:]]+$/) $i = "xxxxx"; print }' sample.txt
