/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : dokemon

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 19/05/2022 18:06:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dokemon
-- ----------------------------
DROP TABLE IF EXISTS `dokemon`;
CREATE TABLE `dokemon`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `attribute` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `characteristic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `LV` int NULL DEFAULT 1,
  `EXP` int NULL DEFAULT 0,
  `HP` int NULL DEFAULT 0,
  `AT` int NULL DEFAULT 0,
  `DF` int NULL DEFAULT 0,
  `SA` int NULL DEFAULT 0,
  `SD` int NULL DEFAULT 0,
  `SP` int NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dokemon
-- ----------------------------
INSERT INTO `dokemon` VALUES (7, 12, '妙蛙种子', '草|毒', '茂盛|叶绿素', 1, 0, 12, 6, 6, 6, 6, 6);
INSERT INTO `dokemon` VALUES (8, 14, '小火龙', '火', '猛火|太阳之力', 1, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO `dokemon` VALUES (9, 15, '杰尼龟', '水', '激流|雨盘', 1, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO `dokemon` VALUES (10, 17, '小火龙', '火', '猛火|太阳之力', 1, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO `dokemon` VALUES (11, 18, '小火龙', '火', '猛火|太阳之力', 1, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO `dokemon` VALUES (12, 19, '小火龙', '火', '猛火|太阳之力', 1, 0, 0, 0, 0, 0, 0, 0);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `uid` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `map` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0,0',
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '初级训练师',
  `coin` int NOT NULL DEFAULT 300,
  `diamond` int NOT NULL DEFAULT 0,
  `task` int NULL DEFAULT 1,
  `task_state` int NULL DEFAULT 0,
  `sign` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (12, '宝宝巴士', '男', '0,0', '初级训练师', 1500, 0, 1, 2, '2022-05-18');
INSERT INTO `role` VALUES (14, '林清焰', '女', '0,0', '初级训练师', 600, 0, 1, 0, '2022-05-14');
INSERT INTO `role` VALUES (15, '阿斯顿', '男', '0,0', '初级训练师', 300, 0, 1, 0, NULL);
INSERT INTO `role` VALUES (17, 'asdadawd', '男', '0,0', '初级训练师', 600, 0, 1, 0, '2022-05-15');
INSERT INTO `role` VALUES (18, 'shabi', '女', '0,0', '初级训练师', 600, 0, 1, 0, '2022-05-15');
INSERT INTO `role` VALUES (19, 'woshi shabi', '女', '0,0', '初级训练师', 600, 0, 1, 0, '2022-05-19');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (12, 'i@drizzle.vip', '$2b$12$o4RPslRKHNSzzJoB3GHCFuHSLIAmVxrusiewyYy1alFO6A9Z4zyfG', NULL);
INSERT INTO `user` VALUES (13, '396823203@qq.com', '$2b$12$bMsQLc1vBLecO.JeyPe5ZOL9CD9eHbRNeb0cVhH380t7u/UaLzciy', NULL);
INSERT INTO `user` VALUES (14, 'test@drizzle.vip', '$2b$12$lDQ94uwtgBwpsyzLKtPs4eG6k2bhofMVf/DvbHjrCLIgMHR/zTvpG', NULL);
INSERT INTO `user` VALUES (15, 'sdf', '$2b$12$C5OVgO9Dgvs27Qd4Usdyaeb4nD/4QNK4FqURES/jraX1/Ipngp9fi', NULL);
INSERT INTO `user` VALUES (16, 'asdasd', '$2b$12$QfJ3mcWZ90XX4SFMn.gls.L.Dq//LS.MngXQGEKs99FyaGJ0mKEha', NULL);
INSERT INTO `user` VALUES (17, 'adsasd', '$2b$12$T4nlEUqd/zc/IzZD54KNx.F1ZZsvKoYiunQcXdN0E3bpWYzMpcD26', NULL);
INSERT INTO `user` VALUES (18, 'asdasdads', '$2b$12$pHt8UVtR9gdn6do9ec13MOUXXhK8FqixhWaNXJ6ydO5/QNuZbvnUO', NULL);
INSERT INTO `user` VALUES (19, '1234555555@qq.com', '$2b$12$TorztzmuKJGzFODnazEajuGR6.nMvEzrTK5ZHWfJvnHqhtxI8Jqri', NULL);

SET FOREIGN_KEY_CHECKS = 1;
