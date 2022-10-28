DROP TABLE IF EXISTS shozoku CASCADE;
CREATE TABLE shozoku (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS tantosha CASCADE;
CREATE TABLE tantosha (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  shozoku_id INTEGER NOT NULL,
  role VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS customer CASCADE;
CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  name_kana VARCHAR(100),
  birthday date,
  gender VARCHAR(10),
  blood_type VARCHAR(5),
  phone_no1 VARCHAR(20),
  phone_no2 VARCHAR(20),
  phone_no3 VARCHAR(20),
  mail_address VARCHAR(100),
  address VARCHAR(100),
  memo VARCHAR(200),
  tantosha_id INTEGER,
  signup_date date NOT NULL
);

DROP TABLE IF EXISTS uriage CASCADE;
CREATE TABLE uriage (
  id SERIAL PRIMARY KEY,
  nyuryoku_date DATE NOT NULL,
  keijo_date DATE,
  yotei_date DATE,
  uriba_id INTEGER,
  ks_tanto_id INTEGER,
  shikiri_date date,
  shikiri_no VARCHAR(10),
  customer_id INTEGER NOT NULL,
  mihokoku BOOLEAN,
  memo VARCHAR(200)
);

DROP TABLE IF EXISTS uriage_meisai CASCADE;
CREATE TABLE uriage_meisai (
  id SERIAL PRIMARY KEY,
  uriage_id INTEGER NOT NULL,
  jigane VARCHAR(50),
  ishimei VARCHAR(50),
  item VARCHAR(50),
  uraban VARCHAR(10),
  hinban VARCHAR(10),
  jodai INTEGER,
  gedai INTEGER,
  shohin_photo_name TEXT,
  shohin_photo BYTEA,
  memo VARCHAR(200)
);
DROP TABLE IF EXISTS uriba CASCADE;
CREATE TABLE uriba (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);
DROP TABLE IF EXISTS ks_tanto CASCADE;
CREATE TABLE ks_tanto (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
