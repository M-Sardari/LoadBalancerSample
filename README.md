![Product Name Screen Shot][nestjs-logo]

# LoadBalancer
Simple Instance of LoadBalancer

# Run haproxy Docker
docker run -d --name load-balaner -p 3005:3005 -v c:\loadbalancer\haproxy:/usr/local/etc/haproxy:ro haproxy

# Description
Open Workspace file in VsCode and run two projects(server-1 & server-2)
then request to http://localhost:3005/



<!-- MARKDOWN LINKS & IMAGES -->
[nestjs-logo]: nestjs-logo.png
