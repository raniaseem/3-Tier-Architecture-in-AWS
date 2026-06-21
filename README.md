# 3-Tier-Architecture-in-AWS
Deploy 3 Tier Architecture in AWS
Frontend (S3)
    ↓
Application Load Balancer
    ↓
EC2 Node.js Application
    ↓
Aurora MySQL

## AWS Services Used

- Amazon S3
- Application Load Balancer
- Amazon EC2
- Amazon Aurora MySQL
- VPC
- Security Groups
- IAM

## Database

Database Name: webappdb

Table Name: transactions

```sql
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10,2),
    description VARCHAR(255)
);
```

## Run Application

```bash
npm install
node index.js
```

Application runs on port 3000.
