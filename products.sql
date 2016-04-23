CREATE TABLE Products (ItemID int AUTO_INCREMENT, ProductName VARCHAR(100), DepartmentName VARCHAR(100), Price int, StockQuantity int, PRIMARY KEY(ItemID));

ALTER TABLE Products
MODIFY COLUMN ProductName VARCHAR(100);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Purina Dog Chow', 'Pet Supplies', 38.50, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Miracle Gro Plant Food', 'Lawn & Garden', 9.98, 65);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Fitbit Charge', 'Exercise & Fitness', 149.95, 40);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Pepperidge Farm Goldfish Crackers', 'Snack Foods', 6.98, 400);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Little Tikes First Slide', 'Toys & Games', 27.99, 25);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('40 Color Origami', 'Arts & Crafts', 4.99, 7);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('LG Electronics HD Smart LED TV', 'Electronics', 9997.99 ,10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Powerbeats 2 Wireless Headphones', 'Electronics', 129.99, 15 );
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Camping Lantern', 'Tools& Home Improvement', 15.99, 30);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Ritz Crackers', 'Snack Food', 3.56, 500);



