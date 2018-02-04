# Notes

## Stabilization

DESHAKE

```sh
./ffmpeg -i input.m4v -vf deshake stabilized.m4v
```

LIBVIDSTAB

```sh
./ffmpeg -i input.m4v -vf vidstabdetect=shakiness=7:accuracy=15:result="mytransform.trf" stabilized.firstpass.tmp.m4v
./ffmpeg -i stabilized.firstpass.tmp.m4v -vf vidstabtransform=input="mytransform.trf":zoom=0:smoothing=10:interpol=bicubic,unsharp=5:5:0.8:3:3:0.4 stabilized.mkv
```