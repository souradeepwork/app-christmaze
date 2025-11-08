export const tenants = [
  {
    id: "t_christmaze_demo_001",
    name: "North Pole Café",
    plan: "growth",
    status: "ACTIVE",
    number: "+19095551234",
    languages: ["en", "es"],
    features: {
      bookings: true,
      campaigns: true,
      catalog: true,
    },
  },
  {
    id: "t_christmaze_demo_002",
    name: "Santa Snap Studio",
    plan: "starter",
    status: "ACTIVE",
    number: "+16265552025",
    languages: ["en"],
    features: {
      bookings: true,
      campaigns: false,
      catalog: false,
    },
  },
  {
    id: "t_christmaze_demo_003",
    name: "Fiesta Panadería",
    plan: "growth",
    status: "ACTIVE",
    number: "+12135558899",
    languages: ["es", "en"],
    features: {
      bookings: true,
      campaigns: true,
      catalog: true,
    },
  },
];

export const kpiData = {
  today: {
    bookingsConfirmed: 68,
    conversionRate: 24.5,
    messagesSent: 580,
    missedCalls: 2,
  },
  trends: {
    bookingsConfirmed: +12.3,
    conversionRate: +3.2,
    messagesSent: +8.7,
    missedCalls: -50.0,
  },
  liveTraffic: {
    callsNow: 3,
    smsNow: 8,
    activeAgents: 2,
    errors: 0,
  },
};

export const realtimeEvents = [
  {
    id: "evt_001",
    type: "BOOKING.CONFIRMED",
    timestamp: new Date().toISOString(),
    data: {
      customerName: "Maria Garcia",
      partySize: 4,
      time: "7:30 PM",
    },
  },
  {
    id: "evt_002",
    type: "PAYMENT.PAID",
    timestamp: new Date(Date.now() - 120000).toISOString(),
    data: {
      amount: 45.0,
      customerName: "John Smith",
    },
  },
  {
    id: "evt_003",
    type: "CONVO.CREATED",
    timestamp: new Date(Date.now() - 300000).toISOString(),
    data: {
      from: "+19095556789",
      channel: "SMS",
    },
  },
  {
    id: "evt_004",
    type: "CAMPAIGN.SENT",
    timestamp: new Date(Date.now() - 600000).toISOString(),
    data: {
      campaignName: "🎄 Peppermint Week Special",
      recipients: 150,
    },
  },
];

export const conversations = [
  {
    id: "conv_001",
    name: "Maria Garcia",
    phone: "+19095556789",
    lastMessage: "Perfect! See you at 7:30 PM",
    timestamp: new Date(Date.now() - 300000).toISOString(),
    unread: 0,
    tags: ["booking", "confirmed"],
    status: "resolved",
  },
  {
    id: "conv_002",
    name: "Unknown",
    phone: "+16265551234",
    lastMessage: "What are your holiday hours?",
    timestamp: new Date(Date.now() - 900000).toISOString(),
    unread: 1,
    tags: ["hours"],
    status: "active",
  },
  {
    id: "conv_003",
    name: "Carlos Rodriguez",
    phone: "+12135559876",
    lastMessage: "¿Tienen especiales de Navidad?",
    timestamp: new Date(Date.now() - 1800000).toISOString(),
    unread: 0,
    tags: ["promo", "es"],
    status: "resolved",
  },
];

export const bookings = [
  {
    id: "book_001",
    customerName: "Maria Garcia",
    phone: "+19095556789",
    date: "2025-12-15",
    time: "19:30",
    partySize: 4,
    status: "confirmed",
    source: "sms",
  },
  {
    id: "book_002",
    customerName: "John Smith",
    phone: "+16265554321",
    date: "2025-12-15",
    time: "18:00",
    partySize: 2,
    status: "confirmed",
    source: "voice",
  },
  {
    id: "book_003",
    customerName: "Sarah Johnson",
    phone: "+19095557890",
    date: "2025-12-16",
    time: "12:00",
    partySize: 6,
    status: "hold",
    source: "sms",
  },
];

export const catalog = [
  {
    id: "item_001",
    name: "Peppermint Mocha",
    price: 5.95,
    category: "beverages",
    tags: ["holiday", "popular"],
    available: true,
  },
  {
    id: "item_002",
    name: "Gingerbread Latte",
    price: 5.75,
    category: "beverages",
    tags: ["holiday"],
    available: true,
  },
  {
    id: "item_003",
    name: "Holiday Dessert Platter",
    price: 39.0,
    category: "food",
    tags: ["holiday", "catering"],
    available: true,
  },
];

export const campaigns = [
  {
    id: "camp_001",
    name: "🎄 Peppermint Week Special",
    status: "sent",
    scheduledDate: "2025-12-10",
    recipients: 150,
    delivered: 148,
    clicks: 42,
    optOuts: 2,
  },
  {
    id: "camp_002",
    name: "Christmas Eve Hours",
    status: "scheduled",
    scheduledDate: "2025-12-20",
    recipients: 200,
    delivered: 0,
    clicks: 0,
    optOuts: 0,
  },
  {
    id: "camp_003",
    name: "New Year Reservations",
    status: "draft",
    scheduledDate: null,
    recipients: 0,
    delivered: 0,
    clicks: 0,
    optOuts: 0,
  },
];

export const analyticsData = {
  overview: {
    callsHandled: 320,
    avgResponseTime: "2.3s",
    bookings: 68,
    conversionRate: 24.5,
    optOutRate: 1.2,
    campaignROI: 342,
  },
  intents: [
    { name: "Hours & Directions", count: 95, percentage: 29.7 },
    { name: "Booking", count: 68, percentage: 21.3 },
    { name: "Menu", count: 52, percentage: 16.3 },
    { name: "Promotions", count: 42, percentage: 13.1 },
    { name: "Order Status", count: 35, percentage: 10.9 },
    { name: "Other", count: 28, percentage: 8.7 },
  ],
  languageSplit: {
    en: 67,
    es: 33,
  },
};
