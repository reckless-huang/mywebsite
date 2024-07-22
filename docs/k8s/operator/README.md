---
title: Operator
---
## Operator
go 编译arm包巨慢，各种debug，debug日志，内存CPU监控，io监控等，都没找到原因，最后发现我们用了一个arm版本的基础镜像，我擦，go的arm环境居然可以在amd64上正常运行。换了基础镜像就从50分钟下降到5分钟了


使用docker新特性，支持docker管理的卷来cache依赖
![img_v3_02d1_17a11e99-97bf-4ba5-8a62-03a1fb92d35g.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/2421987/1721632911630-64d050de-e4b7-4c54-94a2-864309764914.jpeg#averageHue=%23222221&clientId=u284f70ce-8a26-4&from=paste&height=160&id=u3416a6ff&originHeight=320&originWidth=1038&originalType=binary&ratio=2&rotation=0&showTitle=false&size=100836&status=done&style=none&taskId=u98ab0bef-0feb-4ef6-8203-874adb6279c&title=&width=519)

