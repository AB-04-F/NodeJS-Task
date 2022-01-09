========== Update Package ==========
npm install

========== SET mysql cred in .env ==========


========== Update Models ==========
sequelize-auto -o "./models" -d product_demo_sample -h 192.168.64.2 -u akash -p 3306 -x akash -e mysql 

========== Start Project ==========
node server

