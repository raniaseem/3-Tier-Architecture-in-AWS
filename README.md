# AWS 3-Tier Architecture Project

## Overview

This project demonstrates a complete AWS 3-Tier Architecture using:

- Amazon S3 (Web Tier)
- Application Load Balancer (ALB)
- Amazon EC2 (Application Tier)
- Amazon Aurora MySQL (Database Tier)
- Auto Scaling Group
- CloudWatch Monitoring
- GitHub

## Architecture

User
↓
S3 Static Website
↓
Application Load Balancer
↓
EC2 Auto Scaling Group
↓
Aurora MySQL Database

## AWS Services Used

- VPC
- Public Subnets
- Private Subnets
- Internet Gateway
- NAT Gateway
- Security Groups
- S3
- EC2
- Launch Template
- Auto Scaling Group
- Application Load Balancer
- Aurora MySQL
- IAM
- CloudWatch

## Database

Database Name:

webappdb

Table:

transactions

Sample Data:

| id | amount | description |
|----|---------|-------------|
| 1 | 400.00 | groceries |

## Application Verification

API Endpoint:

/transactions

Sample Response:

[
 {
   "id": 1,
   "amount": "400.00",
   "description": "groceries"
 }
]

## Monitoring

CloudWatch Dashboard monitors:

- EC2 CPU Utilization
- ALB Request Count
- Healthy Hosts
- Aurora Connections
- Aurora CPU Utilization

## Author

Rani Aseem
