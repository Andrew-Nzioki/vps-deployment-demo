# How to Deploy Multiple Containerized Apps on VPS Using Nginx as a Proxy

## Update the Operating System

1. Update package lists:
   ```bash
   sudo apt update
   ```
2. Upgrade installed packages:
   ```bash
   sudo apt upgrade
   ```

## Install and Start Nginx

1. Install Nginx:
   ```bash
   sudo apt install nginx
   ```
2. Start Nginx:
   ```bash
   sudo systemctl start nginx
   ```
3. Enable Nginx to start on boot:
   ```bash
   sudo systemctl enable nginx
   ```

## Verify Nginx Installation

1. Check the status of Nginx:
   ```bash
   sudo systemctl status nginx
   ```
2. Test Nginx configuration:
   ```bash
   sudo nginx -t
   ```
3. Check Nginx version:
   ```bash
   nginx -v
   ```

## Adding SSL to Your Nginx Servers

1. Update package lists:
   ```bash
   sudo apt update
   ```
2. Install Certbot and the Nginx plugin:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```
3. Obtain and install SSL certificates for your domains:
   ```bash
   sudo certbot --nginx -d api.andrew-nzioki.com
   sudo certbot --nginx -d rubyapi.andrew-nzioki.com
   sudo certbot --nginx -d andrew-nzioki.com
   ```
4. Follow Certbot prompts:
   - Provide your email address and agree to the terms of service.
   - Choose whether to redirect HTTP traffic to HTTPS. It is generally recommended to choose the redirect option for better security.
5. Test the updated Nginx configuration:
   ```bash
   sudo nginx -t
   ```
6. Reload Nginx to apply changes:
   ```bash
   sudo systemctl reload nginx
   ```
7. Verify automatic SSL certificate renewal:
   ```bash
   sudo certbot renew --dry-run
   ```

## Install Docker and Docker Compose

1. Follow the Docker installation guide for Ubuntu:
   - [Docker Installation Guide](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
2. Install Docker Compose:
   - [DigitalOcean Docker Compose Installation Guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04)

## Configure Nginx for Your Dockerized Applications

1. Create Nginx configuration files for each application:
   - For Ruby API:
     ```bash
     sudo vi /etc/nginx/sites-available/rubyapi.andrew-nzioki.com
     ```
   - For API:
     ```bash
     sudo vi /etc/nginx/sites-available/api.andrew-nzioki.com
     ```
   - For Portfolio:
     ```bash
     sudo vi /etc/nginx/sites-available/andrew-nzioki.com
     ```
2. Create symbolic links to enable these configurations:
   ```bash
   sudo ln -s /etc/nginx/sites-available/rubyapi.andrew-nzioki.com /etc/nginx/sites-enabled/
   sudo ln -s /etc/nginx/sites-available/api.andrew-nzioki.com /etc/nginx/sites-enabled/
   sudo ln -s /etc/nginx/sites-available/andrew-nzioki.com /etc/nginx/sites-enabled/
   ```
3. Test Nginx configuration:
   ```bash
   sudo nginx -t
   ```
4. If the configuration test is successful, reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```

