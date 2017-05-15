INSERT INTO `user` VALUES (1,'Rik','de Kruiff','123','rik'),(2,'Nino','Zijderveld','123','nino');

INSERT INTO `authority` VALUES (2,'ROLE_ADMIN'),(3,'ROLE_ONDERZOEKER'),(4,'ROLE_BEHEERDER'),(5,'ROLE_FYSIO'),(6,'ROLE_BEHEERDERBC');

INSERT INTO `user_authority` VALUES (1,5),(1,4),(2,3),(2,6);