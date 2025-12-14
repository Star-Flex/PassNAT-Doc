# 生产阶段 - 仅打包已编译的静态文件
FROM nginx:alpine-slim

# 设置时区
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    apk del tzdata

# 删除默认的nginx配置
RUN rm -rf /etc/nginx/conf.d/*

# 复制自定义nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 复制构建产物（从GitHub Actions构建的build目录）
COPY build /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
