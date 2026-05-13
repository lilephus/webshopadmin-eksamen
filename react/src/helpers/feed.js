import sanityClient from './sanityClient.js'

const categories = [
  { name: 'Desktop Computers', id: 'desktop-computers' },
  { name: 'Laptops', id: 'laptops' },
  { name: 'Tablets', id: 'tablets' },
  { name: 'Smartphones', id: 'smartphones' },
  { name: 'Accessories', id: 'accessories' }
]

const productTemplates = {
  'desktop-computers': [
    { name: 'Gaming Desktop Pro', id: 'GDP-001', price: 1999.99 },
    { name: 'Workstation Intel i9', id: 'WI9-001', price: 2499.99 },
    { name: 'Budget Office PC', id: 'BOP-001', price: 599.99 },
    { name: 'Ultra Compact Mini PC', id: 'UMP-001', price: 799.99 },
    { name: 'High Performance Render PC', id: 'HPR-001', price: 3299.99 },
    { name: 'Home Entertainment Center', id: 'HEC-001', price: 899.99 },
    { name: 'Server Grade Workstation', id: 'SGW-001', price: 4299.99 },
    { name: 'Student Budget Build', id: 'SBB-001', price: 699.99 },
    { name: 'Creator\'s Dream Machine', id: 'CDM-001', price: 2799.99 },
    { name: 'Streaming Setup PC', id: 'SSP-001', price: 1699.99 },
    { name: 'Office Productivity PC', id: 'OPP-001', price: 749.99 },
    { name: 'Graphics Processing Beast', id: 'GPB-001', price: 3599.99 }
  ],
  'laptops': [
    { name: 'MacBook Pro 16" M3 Max', id: 'MBP-16M3', price: 3999.99 },
    { name: 'Dell XPS 15 OLED', id: 'DXP-15', price: 2299.99 },
    { name: 'Lenovo ThinkPad X1', id: 'LTP-X1', price: 1899.99 },
    { name: 'ASUS ROG Gaming Laptop', id: 'ARG-GL', price: 1799.99 },
    { name: 'HP Pavilion 15 Budget', id: 'HPP-15', price: 599.99 },
    { name: 'Razer Blade Stealth', id: 'RBS-ST', price: 2199.99 },
    { name: 'Microsoft Surface Laptop 6', id: 'MSL-6', price: 1499.99 },
    { name: 'Framework Modular Laptop', id: 'FML-MD', price: 1399.99 },
    { name: 'Samsung Galaxy Book Pro', id: 'SGB-PRO', price: 1299.99 },
    { name: 'HP Spectre x360', id: 'HSX-360', price: 1599.99 }
  ],
  'tablets': [
    { name: 'iPad Pro 12.9" M2', id: 'IPP-129M2', price: 1199.99 },
    { name: 'Samsung Galaxy Tab S9 Ultra', id: 'SGT-S9U', price: 1099.99 },
    { name: 'Microsoft Surface Go 3', id: 'MSG-3', price: 499.99 },
    { name: 'iPad Air', id: 'IPA-AIR', price: 799.99 },
    { name: 'Lenovo Tab P12 Pro', id: 'LTP-P12', price: 899.99 },
    { name: 'OnePlus Pad', id: 'OPD-PAD', price: 679.99 },
    { name: 'iPad Mini', id: 'IPM-MIN', price: 549.99 },
    { name: 'Amazon Fire HD 12', id: 'AFH-12', price: 299.99 },
    { name: 'Google Pixel Tablet', id: 'GPT-PAD', price: 599.99 },
    { name: 'Huawei MatePad Pro', id: 'HMP-PRO', price: 799.99 }
  ],
  'smartphones': [
    { name: 'iPhone 15 Pro Max', id: 'IP15PM', price: 1199.99 },
    { name: 'Samsung Galaxy S24 Ultra', id: 'SGS24U', price: 1299.99 },
    { name: 'Google Pixel 8 Pro', id: 'GP8PRO', price: 999.99 },
    { name: 'OnePlus 12', id: 'OP12', price: 799.99 },
    { name: 'iPhone 15', id: 'IP15', price: 899.99 },
    { name: 'Samsung Galaxy A54', id: 'SGA54', price: 449.99 },
    { name: 'Xiaomi 14 Ultra', id: 'X14U', price: 899.99 },
    { name: 'Nothing Phone 2', id: 'NP2', price: 599.99 },
    { name: 'Motorola Edge 50 Pro', id: 'MEP50', price: 699.99 },
    { name: 'Sony Xperia 1 V', id: 'SXE1V', price: 1099.99 }
  ],
  'accessories': [
    { name: 'Mechanical Gaming Keyboard RGB', id: 'MGK-RGB', price: 149.99 },
    { name: 'Wireless Gaming Mouse', id: 'WGM-PRO', price: 79.99 },
    { name: 'USB-C Fast Charger 65W', id: 'UFC-65', price: 49.99 },
    { name: 'Noise Cancelling Headphones', id: 'NCH-PRO', price: 299.99 },
    { name: 'Portable SSD 2TB', id: 'PSSD-2TB', price: 199.99 },
    { name: '4K Webcam', id: '4KWC-001', price: 129.99 },
    { name: 'Laptop Stand Adjustable', id: 'LSA-001', price: 59.99 },
    { name: 'USB Hub 7-Port', id: 'UH7-001', price: 39.99 },
    { name: 'Screen Protector Pack', id: 'SPP-001', price: 19.99 },
    { name: 'Wireless Charging Pad', id: 'WCP-001', price: 34.99 }
  ]
}

const customerFirstNames = [
  'John', 'Sarah', 'Michael', 'Emma', 'David', 'Sophie', 'Robert', 'Lisa', 'James', 'Anna', 'Christopher'
]

const customerLastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Anderson'
]

const streetNames = ['Main Street', 'Oak Avenue', 'Pine Road', 'Elm Street', 'Maple Drive', 'Cedar Lane', 'Birch Court', 'Spruce Way']
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin']
const zipcodes = ['10001', '90001', '60601', '77001', '85001', '19101', '78201', '92101', '75201', '95101', '73301']

async function emptyDatabase() {
  console.log('Cleaning database...')
  await sanityClient.delete({ query: '*[_type in ["category", "product", "customer", "order", "admin"]]' })
  console.log('Database cleared.')
}

async function createAdmins() {
  console.log('Creating admins...')
  const adminDocs = [
    {
      _id: 'admin.1',
      _type: 'admin',
      firstname: 'Alex',
      lastname: 'Hovland',
      email: 'alex.hovland@webshop.com',
      role: 'super'
    },
    {
      _id: 'admin.2',
      _type: 'admin',
      firstname: 'Mia',
      lastname: 'Berge',
      email: 'mia.berge@webshop.com',
      role: 'editor'
    }
  ]
  await Promise.all(adminDocs.map(doc => sanityClient.create(doc)))
  return adminDocs
}

async function createCategories() {
  console.log('Creating categories...')
  const categoryDocs = categories.map(cat => ({
    _id: `category.${cat.id}`,
    _type: 'category',
    categoryname: cat.name,
    slug: {
      _type: 'slug',
      current: cat.id
    }
  }))
  await Promise.all(categoryDocs.map(doc => sanityClient.create(doc)))
  return categoryDocs
}

async function createProducts(categoryDocs) {
  console.log('Creating products...')
  const categoryMap = {}
  categoryDocs.forEach(cat => {
    const catId = cat._id.replace('category.', '')
    categoryMap[catId] = { _type: 'reference', _ref: cat._id }
  })

  const productDocs = []
  for (const cat of categories) {
    const templates = productTemplates[cat.id]
    const desiredCount = Math.floor(Math.random() * 7) + 6 // 6-12 products
    const randomCount = Math.min(desiredCount, templates.length)

    for (let i = 0; i < randomCount; i++) {
      const template = templates[i]
      productDocs.push({
        _id: `product.${template.id.toLowerCase()}`,
        _type: 'product',
        productname: template.name,
        slug: {
          _type: 'slug',
          current: template.id.toLowerCase().replace(/[^a-z0-9-]/g, '-')
        },
        productid: template.id,
        price: template.price,
        stock: Math.floor(Math.random() * 100) + 10,
        description: `High-quality ${template.name} product available now. Perfect for all your needs.`,
        categories: [{_key: `cat-${i}`, ...categoryMap[cat.id]}]
      })
    }
  }

  await Promise.all(productDocs.map(doc => sanityClient.create(doc)))
  return productDocs
}

async function createCustomers() {
  console.log('Creating customers...')
  const customerDocs = []
  
  for (let i = 0; i < 11; i++) {
    const firstname = customerFirstNames[i % customerFirstNames.length]
    const lastname = customerLastNames[i % customerLastNames.length]
    const streetNum = Math.floor(Math.random() * 9999) + 1
    const streetName = streetNames[Math.floor(Math.random() * streetNames.length)]
    const city = cities[i % cities.length]
    const zipcode = zipcodes[i % zipcodes.length]
    
    customerDocs.push({
      _id: `customer.${i + 1}`,
      _type: 'customer',
      firstname,
      lastname,
      streetaddress: `${streetNum} ${streetName}`,
      city,
      zipcode,
      slug: {
        _type: 'slug',
        current: `${firstname.toLowerCase()}-${i + 1}`
      },
      email: `${firstname.toLowerCase()}.${lastname.toLowerCase()}${i}@email.com`
    })
  }
  
  await Promise.all(customerDocs.map(doc => sanityClient.create(doc)))
  return customerDocs
}

async function createOrders(customerDocs, productDocs) {
  console.log('Creating orders...')
  const orderDocs = []
  
  // Get current month and year dynamically
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  
  // Create date range for current month
  const currentMonthStart = new Date(currentYear, currentMonth, 1)
  const currentMonthEnd = new Date(currentYear, currentMonth + 1, 0)
  
  // Create date range for entire year
  const yearStart = new Date(currentYear, 0, 1)
  const yearEnd = new Date(currentYear, 11, 31)
  
  console.log(`Generating orders for ${currentMonthStart.toLocaleString('default', { month: 'long', year: 'numeric' })}`)
  
  for (let i = 0; i < 25; i++) {
    let orderDate
    
    // At least 10 orders in current month
    if (i < 10) {
      const daysInMonth = (currentMonthEnd.getDate()) - (currentMonthStart.getDate()) + 1
      const randomDay = Math.floor(Math.random() * daysInMonth)
      orderDate = new Date(currentMonthStart)
      orderDate.setDate(currentMonthStart.getDate() + randomDay)
    } else {
      // Random dates for remaining orders throughout the year
      orderDate = new Date(yearStart.getTime() + Math.random() * (yearEnd.getTime() - yearStart.getTime()))
    }
    
    // Random customer
    const customer = customerDocs[Math.floor(Math.random() * customerDocs.length)]
    
    // Random products (1-5 per order)
    const productCount = Math.floor(Math.random() * 5) + 1
    const orderProducts = []
    
    for (let j = 0; j < productCount; j++) {
      const product = productDocs[Math.floor(Math.random() * productDocs.length)]
      orderProducts.push({
        _key: `product-${j}`,
        product: {
          _type: 'reference',
          _ref: product._id
        },
        quantity: Math.floor(Math.random() * 3) + 1
      })
    }
    
    orderDocs.push({
      _id: `order.${i + 1}`,
      _type: 'order',
      orderid: Math.random().toString(36).substr(2, 10).toUpperCase(),
      customer: {
        _type: 'reference',
        _ref: customer._id
      },
      products: orderProducts,
      status: 'open',
      _createdAt: orderDate.toISOString()
    })
  }
  
  await Promise.all(orderDocs.map(doc => sanityClient.create(doc)))
  console.log('Orders created.')
}

async function seed() {
  try {
    console.log('Starting database seeding...')
    await emptyDatabase()
    
    const categoryDocs = await createCategories()
    const productDocs = await createProducts(categoryDocs)
    const customerDocs = await createCustomers()
    await createAdmins()
    await createOrders(customerDocs, productDocs)
    
    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Seeding failed:', error)
    process.exit(1)
  }
}

seed()
