export const projects = [
  {
    name: 'IoT-Based Smart Door Unlock System', year: '2024', badge: 'State-level finalist',
    description: 'Contactless RFID and remote-unlock access control with real-time mobile alerts.',
    problem: 'Physical door access needs to be secure, traceable and usable without touching a lock.',
    features: ['Contactless RFID unlock and remote unlock from a web interface', 'Real-time mobile alerts', 'Full audit log of every unlock event for security compliance'],
    tech: ['NodeMCU (ESP8266)', 'RFID RC522', 'IR Sensor', 'Relay Module', 'Web Interface'],
    github: null, demo: null,
  },
  {
    name: 'Plant Dryness Detection System using IoT (v1.2)', year: '2024', badge: null,
    description: 'Automated irrigation driven by soil moisture readings across multiple sensor nodes.',
    problem: 'Manual plant monitoring wastes time and water.',
    features: ['Automated irrigation across 4+ sensor nodes, reducing manual monitoring effort by 60%', 'Real-time threshold-based control logic, cutting water wastage by an estimated 30%', 'Mobile dashboard over MQTT'],
    tech: ['NodeMCU', 'Soil Moisture Sensor', 'Arduino IDE', 'MQTT', 'Mobile Dashboard'],
    github: null, demo: null,
  },
]
