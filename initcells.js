const init_cells=[[18,5,'red'],
[21,5,'red'],
[24,6,'red'],
[65,6,'purple'],
[60,7,'green'],
[65,7,'green'],
[15,8,'red'],
[21,8,'red'],
[52,8,'green'],
[53,8,'green'],
[54,8,'green'],
[57,8,'green'],
[58,8,'purple'],
[61,8,'green'],
[65,8,'green'],
[24,9,'red'],
[55,9,'green'],
[57,9,'green'],
[58,9,'green'],
[64,9,'green'],
[66,9,'green'],
[18,10,'red'],
[54,10,'green'],
[56,10,'green'],
[58,10,'green'],
[61,10,'green'],
[65,10,'green'],
[66,10,'green'],
[17,11,'red'],
[18,11,'red'],
[19,11,'red'],
[26,11,'red'],
[54,11,'green'],
[56,11,'green'],
[58,11,'green'],
[61,11,'green'],
[62,11,'green'],
[66,11,'green'],
[15,12,'red'],
[17,12,'red'],
[19,12,'red'],
[20,12,'red'],
[22,12,'red'],
[23,12,'red'],
[24,12,'red'],
[26,12,'red'],
[49,12,'purple'],
[50,12,'green'],
[54,12,'green'],
[56,12,'green'],
[58,12,'green'],
[60,12,'green'],
[61,12,'green'],
[63,12,'green'],
[64,12,'green'],
[18,13,'red'],
[20,13,'red'],
[23,13,'red'],
[25,13,'red'],
[50,13,'green'],
[51,13,'green'],
[56,13,'green'],
[58,13,'green'],
[59,13,'green'],
[61,13,'green'],
[62,13,'green'],
[65,13,'green'],
[17,14,'red'],
[18,14,'red'],
[23,14,'red'],
[48,14,'green'],
[51,14,'green'],
[64,14,'green'],
[65,14,'green'],
[16,15,'red'],
[17,15,'red'],
[26,15,'red'],
[47,15,'green'],
[49,15,'green'],
[51,15,'green'],
[62,15,'green'],
[63,15,'green'],
[79,15,'yellow'],
[80,15,'yellow'],
[81,15,'yellow'],
[82,15,'yellow'],
[83,15,'yellow'],
[84,15,'yellow'],
[15,16,'red'],
[22,16,'red'],
[26,16,'red'],
[28,16,'red'],
[48,16,'green'],
[50,16,'green'],
[52,16,'green'],
[64,16,'green'],
[84,16,'yellow'],
[86,16,'yellow'],
[87,16,'yellow'],
[88,16,'yellow'],
[16,17,'red'],
[17,17,'red'],
[18,17,'red'],
[22,17,'red'],
[23,17,'red'],
[25,17,'red'],
[28,17,'red'],
[48,17,'green'],
[49,17,'green'],
[51,17,'green'],
[52,17,'green'],
[56,17,'green'],
[57,17,'green'],
[58,17,'green'],
[61,17,'green'],
[62,17,'green'],
[63,17,'green'],
[64,17,'green'],
[77,17,'yellow'],
[86,17,'yellow'],
[88,17,'yellow'],
[89,17,'yellow'],
[17,18,'red'],
[22,18,'red'],
[24,18,'red'],
[25,18,'red'],
[28,18,'red'],
[49,18,'green'],
[52,18,'green'],
[56,18,'green'],
[58,18,'green'],
[59,18,'green'],
[62,18,'green'],
[63,18,'green'],
[77,18,'yellow'],
[78,18,'yellow'],
[86,18,'yellow'],
[87,18,'yellow'],
[17,19,'red'],
[18,19,'red'],
[22,19,'red'],
[23,19,'red'],
[24,19,'red'],
[25,19,'red'],
[27,19,'red'],
[28,19,'red'],
[49,19,'green'],
[60,19,'green'],
[61,19,'green'],
[64,19,'green'],
[65,19,'green'],
[66,19,'purple'],
[78,19,'yellow'],
[79,19,'yellow'],
[87,19,'yellow'],
[88,19,'yellow'],
[89,19,'yellow'],
[13,20,'red'],
[14,20,'red'],
[15,20,'red'],
[17,20,'red'],
[18,20,'red'],
[22,20,'red'],
[23,20,'red'],
[24,20,'red'],
[26,20,'red'],
[27,20,'red'],
[28,20,'red'],
[30,20,'red'],
[32,20,'red'],
[33,20,'red'],
[49,20,'green'],
[51,20,'green'],
[60,20,'green'],
[79,20,'yellow'],
[80,20,'yellow'],
[81,20,'yellow'],
[82,20,'yellow'],
[83,20,'yellow'],
[84,20,'yellow'],
[13,21,'red'],
[14,21,'red'],
[15,21,'red'],
[16,21,'red'],
[18,21,'red'],
[22,21,'red'],
[23,21,'red'],
[24,21,'red'],
[25,21,'red'],
[26,21,'red'],
[27,21,'red'],
[28,21,'red'],
[30,21,'red'],
[32,21,'red'],
[49,21,'green'],
[51,21,'green'],
[52,21,'green'],
[59,21,'green'],
[60,21,'green'],
[61,21,'purple'],
[62,21,'green'],
[63,21,'green'],
[84,21,'yellow'],
[85,21,'yellow'],
[14,22,'red'],
[15,22,'red'],
[17,22,'red'],
[18,22,'red'],
[22,22,'red'],
[23,22,'red'],
[24,22,'red'],
[25,22,'red'],
[26,22,'red'],
[27,22,'red'],
[29,22,'red'],
[30,22,'red'],
[32,22,'red'],
[49,22,'green'],
[50,22,'green'],
[52,22,'green'],
[61,22,'green'],
[62,22,'green'],
[79,22,'yellow'],
[80,22,'yellow'],
[81,22,'yellow'],
[15,23,'red'],
[16,23,'red'],
[17,23,'red'],
[18,23,'red'],
[22,23,'red'],
[24,23,'red'],
[26,23,'red'],
[27,23,'red'],
[28,23,'red'],
[29,23,'red'],
[30,23,'red'],
[31,23,'red'],
[32,23,'red'],
[42,23,'blue'],
[49,23,'green'],
[79,23,'yellow'],
[81,23,'yellow'],
[82,23,'yellow'],
[16,24,'red'],
[17,24,'red'],
[18,24,'red'],
[22,24,'red'],
[23,24,'red'],
[25,24,'red'],
[26,24,'red'],
[27,24,'red'],
[28,24,'red'],
[32,24,'red'],
[38,24,'blue'],
[42,24,'blue'],
[43,24,'blue'],
[50,24,'green'],
[51,24,'green'],
[61,24,'green'],
[62,24,'green'],
[63,24,'green'],
[79,24,'yellow'],
[82,24,'yellow'],
[17,25,'red'],
[18,25,'red'],
[22,25,'red'],
[23,25,'red'],
[24,25,'red'],
[25,25,'red'],
[26,25,'red'],
[27,25,'red'],
[28,25,'red'],
[31,25,'red'],
[37,25,'blue'],
[38,25,'blue'],
[42,25,'blue'],
[56,25,'green'],
[59,25,'purple'],
[61,25,'green'],
[17,26,'red'],
[18,26,'red'],
[36,26,'blue'],
[38,26,'blue'],
[42,26,'blue'],
[56,26,'green'],
[57,26,'green'],
[59,26,'green'],
[60,26,'green'],
[61,26,'green'],
[16,27,'red'],
[17,27,'red'],
[18,27,'red'],
[28,27,'red'],
[36,27,'blue'],
[38,27,'blue'],
[42,27,'blue'],
[57,27,'green'],
[58,27,'green'],
[36,28,'blue'],
[37,28,'blue'],
[38,28,'blue'],
[42,28,'blue'],
[36,29,'blue'],
[37,29,'blue'],
[38,29,'blue'],
[39,29,'blue'],
[40,29,'blue'],
[41,29,'blue'],
[42,29,'blue'],
[43,29,'blue'],
[68,29,'yellow'],
[69,29,'yellow'],
[71,29,'yellow'],
[74,29,'yellow'],
[75,29,'yellow'],
[35,30,'blue'],
[37,30,'blue'],
[38,30,'blue'],
[39,30,'blue'],
[40,30,'blue'],
[41,30,'blue'],
[42,30,'blue'],
[43,30,'blue'],
[68,30,'yellow'],
[69,30,'yellow'],
[70,30,'yellow'],
[71,30,'yellow'],
[75,30,'yellow'],
[76,30,'yellow'],
[35,31,'blue'],
[36,31,'blue'],
[37,31,'blue'],
[38,31,'blue'],
[39,31,'blue'],
[40,31,'blue'],
[41,31,'blue'],
[42,31,'blue'],
[43,31,'blue'],
[44,31,'blue'],
[68,31,'yellow'],
[76,31,'yellow'],
[36,32,'blue'],
[37,32,'blue'],
[38,32,'blue'],
[39,32,'blue'],
[40,32,'blue'],
[41,32,'blue'],
[43,32,'blue'],
[44,32,'blue'],
[68,32,'yellow'],
[76,32,'yellow'],
[33,33,'blue'],
[34,33,'blue'],
[36,33,'blue'],
[40,33,'blue'],
[41,33,'blue'],
[44,33,'blue'],
[45,33,'blue'],
[47,33,'blue'],
[68,33,'yellow'],
[76,33,'yellow'],
[33,34,'blue'],
[35,34,'blue'],
[36,34,'blue'],
[41,34,'blue'],
[45,34,'blue'],
[46,34,'blue'],
[47,34,'blue'],
[48,34,'blue'],
[67,34,'yellow'],
[76,34,'yellow'],
[41,35,'blue'],
[48,35,'blue'],
[67,35,'yellow'],
[69,35,'yellow'],
[77,35,'yellow'],
[35,36,'blue'],
[36,36,'blue'],
[37,36,'blue'],
[38,36,'blue'],
[41,36,'blue'],
[42,36,'blue'],
[66,36,'yellow'],
[67,36,'yellow'],
[69,36,'yellow'],
[76,36,'yellow'],
[77,36,'yellow'],
[78,36,'yellow'],
[33,37,'blue'],
[35,37,'blue'],
[37,37,'blue'],
[38,37,'blue'],
[40,37,'blue'],
[46,37,'blue'],
[66,37,'yellow'],
[70,37,'yellow'],
[76,37,'yellow'],
[80,37,'yellow'],
[81,37,'yellow'],
[33,38,'blue'],
[34,38,'blue'],
[37,38,'blue'],
[40,38,'blue'],
[41,38,'blue'],
[46,38,'blue'],
[65,38,'yellow'],
[66,38,'yellow'],
[70,38,'yellow'],
[76,38,'yellow'],
[80,38,'yellow'],
[81,38,'yellow'],
[82,38,'yellow'],
[83,38,'yellow'],
[84,38,'yellow'],
[34,39,'blue'],
[37,39,'blue'],
[41,39,'blue'],
[46,39,'blue'],
[70,39,'yellow'],
[76,39,'yellow'],
[77,39,'yellow'],
[80,39,'yellow'],
[81,39,'yellow'],
[34,40,'blue'],
[37,40,'blue'],
[41,40,'blue'],
[46,40,'blue'],
[47,40,'blue'],
[70,40,'yellow'],
[71,40,'yellow'],
[77,40,'yellow'],
[81,40,'yellow'],
[82,40,'yellow'],
[34,41,'blue'],
[37,41,'blue'],
[41,41,'blue'],
[47,41,'blue'],
[71,41,'yellow'],
[77,41,'yellow'],
[78,41,'yellow'],
[82,41,'yellow'],
[83,41,'yellow'],
[34,42,'blue'],
[37,42,'blue'],
[41,42,'blue'],
[47,42,'blue'],
[71,42,'yellow'],
[78,42,'yellow'],
[28,43,'blue'],
[34,43,'blue'],
[37,43,'blue'],
[41,43,'blue'],
[47,43,'blue'],
[70,43,'yellow'],
[71,43,'yellow'],
[34,44,'blue'],
[41,44,'blue'],
[47,44,'blue'],
[70,44,'yellow'],
[47,45,'blue'],
[34,47,'blue'],
[44,48,'blue']];
