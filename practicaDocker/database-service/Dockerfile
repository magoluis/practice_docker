FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD remote  
ENV MYSQL_DATABASE sysdb 
ENV MYSQL_USER remote  
ENV MYSQL_PASSWORD remote

ADD setup.sql /docker-entrypoint-initdb.d
