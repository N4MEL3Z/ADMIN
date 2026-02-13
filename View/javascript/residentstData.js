// residentsData.js

const residents = [

  // ========================
  // LOT 63 - 60
  // ========================
  { name: "Carlos Mendoza", project: "STO.TOMAS PHASE 1", block: "A", lot: "63", status: "active", electricity: 1200, water: 350 },
  { name: "Maria Mendoza", project: "STO.TOMAS PHASE 1", block: "A", lot: "63", status: "active", electricity: 1150, water: 300 },

  { name: "Daniel Cruz", project: "STO.TOMAS PHASE 1", block: "A", lot: "62", status: "active", electricity: 900, water: 250 },

  { name: "Angela Ramos", project: "STO.TOMAS PHASE 1", block: "A", lot: "61", status: "inactive", electricity: 0, water: 0 },

  { name: "Victor Santos", project: "STO.TOMAS PHASE 1", block: "A", lot: "60", status: "active", electricity: 1050, water: 280 },
  { name: "Liza Santos", project: "STO.TOMAS PHASE 1", block: "A", lot: "60", status: "active", electricity: 1050, water: 280 },

  // ========================
  // LOT 59 - 55
  // ========================
  { name: "Robert Lim", project: "STO.TOMAS PHASE 1", block: "A", lot: "59", status: "active", electricity: 1000, water: 260 },

  { name: "Elaine Torres", project: "STO.TOMAS PHASE 1", block: "A", lot: "58", status: "active", electricity: 950, water: 240 },

  { name: "Patrick Gomez", project: "STO.TOMAS PHASE 1", block: "A", lot: "57", status: "inactive", electricity: 0, water: 0 },

  { name: "Kimberly Tan", project: "STO.TOMAS PHASE 1", block: "A", lot: "56", status: "active", electricity: 1020, water: 270 },

  { name: "Anthony Rivera", project: "STO.TOMAS PHASE 1", block: "A", lot: "55", status: "active", electricity: 980, water: 250 },

  // ========================
  // LOT 54 - 50
  // ========================
  { name: "Grace Villanueva", project: "STO.TOMAS PHASE 1", block: "A", lot: "54", status: "active", electricity: 970, water: 240 },

  { name: "Henry Castillo", project: "STO.TOMAS PHASE 1", block: "A", lot: "53", status: "inactive", electricity: 0, water: 0 },

  { name: "Megan Flores", project: "STO.TOMAS PHASE 1", block: "A", lot: "52", status: "active", electricity: 1010, water: 260 },

  { name: "Joshua Perez", project: "STO.TOMAS PHASE 1", block: "A", lot: "51", status: "active", electricity: 990, water: 250 },

  { name: "Nicole Bautista", project: "STO.TOMAS PHASE 1", block: "A", lot: "50", status: "inactive", electricity: 0, water: 0 },

  // ========================
  // LOT 49 - 45
  // ========================
  { name: "Adrian Navarro", project: "STO.TOMAS PHASE 1", block: "A", lot: "49", status: "active", electricity: 1000, water: 270 },

  { name: "Samantha Yu", project: "STO.TOMAS PHASE 1", block: "A", lot: "48", status: "active", electricity: 970, water: 260 },

  { name: "Jeffrey Aquino", project: "STO.TOMAS PHASE 1", block: "A", lot: "47", status: "inactive", electricity: 0, water: 0 },

  { name: "Christine Ong", project: "STO.TOMAS PHASE 1", block: "A", lot: "46", status: "active", electricity: 980, water: 250 },

  { name: "Michael Ramos", project: "STO.TOMAS PHASE 1", block: "A", lot: "45", status: "active", electricity: 1005, water: 275 },

  // ========================
  // LOT 44 - 40
  // ========================
  { name: "Andrea Lopez", project: "STO.TOMAS PHASE 1", block: "A", lot: "44", status: "inactive", electricity: 0, water: 0 },

  { name: "Kevin Tan", project: "STO.TOMAS PHASE 1", block: "A", lot: "43", status: "active", electricity: 1020, water: 260 },

  { name: "Patricia Diaz", project: "STO.TOMAS PHASE 1", block: "A", lot: "42", status: "active", electricity: 980, water: 250 },

  { name: "John Paul Reyes", project: "STO.TOMAS PHASE 1", block: "A", lot: "41", status: "inactive", electricity: 0, water: 0 },

  { name: "Isabella Cruz", project: "STO.TOMAS PHASE 1", block: "A", lot: "40", status: "active", electricity: 1010, water: 270 },

  // ========================
  // LOT 39 - 35
  // ========================
  { name: "Marco Alvarez", project: "STO.TOMAS PHASE 1", block: "A", lot: "39", status: "active", electricity: 990, water: 250 },

  { name: "Vanessa Co", project: "STO.TOMAS PHASE 1", block: "A", lot: "38", status: "inactive", electricity: 0, water: 0 },

  { name: "Ralph Santos", project: "STO.TOMAS PHASE 1", block: "A", lot: "37", status: "active", electricity: 1005, water: 260 },

  { name: "Denise Romero", project: "STO.TOMAS PHASE 1", block: "A", lot: "36", status: "active", electricity: 1015, water: 270 },

  { name: "Samuel Lee", project: "STO.TOMAS PHASE 1", block: "A", lot: "35", status: "inactive", electricity: 0, water: 0 },

  // ========================
  // LOT 34 - 30
  // ========================
  { name: "Carla Mendoza", project: "STO.TOMAS PHASE 1", block: "A", lot: "34", status: "active", electricity: 1000, water: 260 },

  { name: "Ethan Garcia", project: "STO.TOMAS PHASE 1", block: "A", lot: "33", status: "active", electricity: 990, water: 250 },

  { name: "Bianca Flores", project: "STO.TOMAS PHASE 1", block: "A", lot: "32", status: "inactive", electricity: 0, water: 0 },

  { name: "Noah Torres", project: "STO.TOMAS PHASE 1", block: "A", lot: "31", status: "active", electricity: 1020, water: 270 },

  { name: "Olivia Reyes", project: "STO.TOMAS PHASE 1", block: "A", lot: "30", status: "active", electricity: 1010, water: 260 },

  // ========================
  // LOT 29 - 25
  // ========================
  { name: "Lucas Tan", project: "STO.TOMAS PHASE 1", block: "A", lot: "29", status: "inactive", electricity: 0, water: 0 },

  { name: "Ava Lim", project: "STO.TOMAS PHASE 1", block: "A", lot: "28", status: "active", electricity: 980, water: 250 },

  { name: "Gabriel Ramos", project: "STO.TOMAS PHASE 1", block: "A", lot: "27", status: "active", electricity: 1005, water: 260 },

  { name: "Sophia Cruz", project: "STO.TOMAS PHASE 1", block: "A", lot: "26", status: "inactive", electricity: 0, water: 0 },

  { name: "Nathan Perez", project: "STO.TOMAS PHASE 1", block: "A", lot: "25", status: "active", electricity: 1010, water: 270 },

  // ========================
  // LOT 24 - 20
  // ========================
  { name: "Chloe Santos", project: "STO.TOMAS PHASE 1", block: "A", lot: "24", status: "active", electricity: 980, water: 250 },

  { name: "Julian Navarro", project: "STO.TOMAS PHASE 1", block: "A", lot: "23", status: "inactive", electricity: 0, water: 0 },

  { name: "Ella Bautista", project: "STO.TOMAS PHASE 1", block: "A", lot: "22", status: "active", electricity: 1000, water: 260 },

  { name: "David Yu", project: "STO.TOMAS PHASE 1", block: "A", lot: "21", status: "active", electricity: 1015, water: 270 },

  { name: "Zoe Castillo", project: "STO.TOMAS PHASE 1", block: "A", lot: "20", status: "inactive", electricity: 0, water: 0 }

];
