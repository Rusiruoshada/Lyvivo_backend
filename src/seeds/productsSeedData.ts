
const productsSeedData = [
    {
      productName: "Apple iPhone 13 Pro Max",
      category: "Electronics",
      regularPrice: 1099.99,
      discountPrice: 999.99,
      description: "Experience the power and performance of the iPhone 13 Pro Max with its advanced camera system, Super Retina XDR display, and A15 Bionic chip.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Quinoa",
      category: "Grocery",
      regularPrice: 8.99,
      discountPrice: 6.99,
      description: "Nutrient-rich organic quinoa, perfect for salads, soups, and as a side dish. High in protein, fiber, and essential vitamins.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Tylenol Extra Strength Pain Reliever",
      category: "Pharmacy",
      regularPrice: 9.49,
      discountPrice: 7.99,
      description: "Quickly relieve pain and reduce fever with Tylenol Extra Strength tablets. Trusted by doctors and recommended for effective relief.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Lindt Excellence Dark Chocolate Bar",
      category: "Food",
      regularPrice: 3.99,
      discountPrice: 2.99,
      weight: "100",
      description: "Indulge in the rich, smooth taste of Lindt Excellence Dark Chocolate. Made with the finest cocoa beans for a luxurious treat.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Samsung 65-Inch QLED 4K UHD Smart TV",
      category: "Electronics",
      regularPrice: 1499.99,
      discountPrice: 1299.99,
      description: "Immerse yourself in stunning 4K UHD visuals with the Samsung QLED Smart TV. Enjoy a smart viewing experience with intuitive features.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Fresh Organic Kale",
      category: "Grocery",
      regularPrice: 2.99,
      discountPrice: 1.99,
      weight: "250",
      description: "Freshly picked organic kale, packed with vitamins and minerals. Ideal for salads, smoothies, and healthy dishes.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Advil Coated Tablets",
      category: "Pharmacy",
      regularPrice: 7.99,
      discountPrice: 5.99,
      description: "Effective relief from headaches, muscle aches, and minor arthritis pain with Advil Coated Tablets. Trusted pain relief for everyday ailments.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Ben & Jerry's Chunky Monkey Ice Cream",
      category: "Food",
      regularPrice: 5.49,
      discountPrice: 4.49,
      weight: "500ml",
      description: "Enjoy chunks of chocolate-covered bananas and walnuts in creamy banana ice cream. Ben & Jerry's Chunky Monkey is a flavor sensation!",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Sony PlayStation 5",
      category: "Electronics",
      regularPrice: 499.99,
      discountPrice: 449.99,
      description: "Enter a new era of gaming with the Sony PlayStation 5. Experience lightning-fast loading, immersive 3D audio, and breathtaking graphics.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Chia Seeds",
      category: "Grocery",
      regularPrice: 6.99,
      discountPrice: 5.49,
      weight: "500",
      description: "Organic chia seeds, packed with omega-3 fatty acids, fiber, and antioxidants. Add to smoothies, yogurt, or use as a nutritious topping.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Band-Aid Brand Adhesive Bandages",
      category: "Pharmacy",
      regularPrice: 4.49,
      discountPrice: 3.49,
      description: "Protect minor cuts and scrapes with Band-Aid Brand Adhesive Bandages. Designed for comfortable, durable protection that stays in place.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Ferrero Rocher Fine Hazelnut Chocolates",
      category: "Food",
      regularPrice: 9.99,
      discountPrice: 7.99,
      weight: "200",
      description: "Indulge in the rich layers of Ferrero Rocher Fine Hazelnut Chocolates, crafted with a whole roasted hazelnut in a crispy wafer shell.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Bose QuietComfort 45 Wireless Noise Cancelling Headphones",
      category: "Electronics",
      regularPrice: 329.99,
      discountPrice: 279.99,
      description: "Escape into your music with Bose QuietComfort 45 Wireless Headphones. Enjoy world-class noise cancellation and balanced sound for a premium listening experience.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Extra Virgin Olive Oil",
      category: "Grocery",
      regularPrice: 14.99,
      discountPrice: 12.99,
      weight: "1L",
      description: "Cold-pressed organic extra virgin olive oil, perfect for cooking, dressings, and dips. Packed with heart-healthy monounsaturated fats and antioxidants.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Crest 3D White Professional Effects Whitestrips",
      category: "Pharmacy",
      regularPrice: 44.99,
      discountPrice: 39.99,
      description: "Achieve professional-level teeth whitening at home with Crest 3D White Whitestrips. Remove 14 years of stains in just 30 minutes a day.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Tazo Awake English Breakfast Tea Bags",
      category: "Food",
      regularPrice: 3.49,
      discountPrice: 2.49,
      weight: "50 count",
      description: "Start your day with a bold and invigorating cup of Tazo Awake English Breakfast Tea. A robust blend of black teas to awaken your senses.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "DJI Air 2S Drone",
      category: "Electronics",
      regularPrice: 999.99,
      discountPrice: 899.99,
      description: "Capture stunning aerial photos and videos with the DJI Air 2S Drone. Equipped with a 1-inch CMOS sensor and intelligent flight modes for professional results.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Blueberries",
      category: "Grocery",
      regularPrice: 6.49,
      discountPrice: 5.49,
      weight: "250",
      description: "Plump and sweet organic blueberries, bursting with antioxidants and vitamins. Enjoy them fresh, in smoothies, or as a topping for yogurt.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Neutrogena Hydro Boost Water Gel Moisturizer",
      category: "Pharmacy",
      regularPrice: 19.99,
      discountPrice: 16.99,
      description: "Hydrate your skin with Neutrogena Hydro Boost Water Gel. Lightweight, oil-free formula absorbs quickly to deliver long-lasting hydration without clogging pores.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Green & Black's Organic Dark Chocolate",
      category: "Food",
      regularPrice: 3.99,
      discountPrice: 2.99,
      weight: "100",
      description: "Savor the intense flavor of Green & Black's Organic Dark Chocolate. Made with ethically sourced cocoa beans for a rich and satisfying experience.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Nintendo Switch OLED Model",
      category: "Electronics",
      regularPrice: 349.99,
      discountPrice: 329.99,
      description: "Enjoy vibrant colors and immersive gaming on the Nintendo Switch OLED Model. Features a larger, vibrant screen and enhanced audio for a premium gaming experience.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Avocado",
      category: "Grocery",
      regularPrice: 1.99,
      discountPrice: 1.49,
      weight: "Each",
      description: "Creamy and nutritious organic avocados, perfect for guacamole, salads, and as a healthy topping. Packed with heart-healthy monounsaturated fats and fiber.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Olay Regenerist Micro-Sculpting Cream",
      category: "Pharmacy",
      regularPrice: 29.99,
      discountPrice: 24.99,
      description: "Revitalize your skin with Olay Regenerist Micro-Sculpting Cream. Advanced anti-aging formula hydrates to visibly firm and plump for younger-looking skin.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Raspberry Pi 4 Model B",
      category: "Electronics",
      regularPrice: 49.99,
      discountPrice: 39.99,
      description: "Build and explore with the Raspberry Pi 4 Model B. A versatile single-board computer for DIY projects, coding, and learning programming.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Quinoa Pasta",
      category: "Grocery",
      regularPrice: 5.99,
      discountPrice: 4.99,
      weight: "500",
      description: "Gluten-free and nutrient-packed organic quinoa pasta. Enjoy a delicious alternative to traditional pasta with added protein and fiber.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "CeraVe Hydrating Facial Cleanser",
      category: "Pharmacy",
      regularPrice: 12.99,
      discountPrice: 10.99,
      description: "Gently cleanse and hydrate your skin with CeraVe Hydrating Facial Cleanser. Suitable for all skin types, including sensitive skin.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Haribo Goldbears Gummy Candy",
      category: "Food",
      regularPrice: 1.99,
      discountPrice: 1.49,
      weight: "200",
      description: "Treat yourself to the classic chewy goodness of Haribo Goldbears. Perfect for sharing, snacking, or satisfying your sweet tooth.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      category: "Electronics",
      regularPrice: 349.99,
      discountPrice: 299.99,
      description: "Immerse yourself in premium audio quality with Sony WH-1000XM4 Wireless Headphones. Industry-leading noise cancellation and superior sound for music lovers.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Organic Mixed Nuts",
      category: "Grocery",
      regularPrice: 11.99,
      discountPrice: 9.99,
      weight: "400",
      description: "A wholesome blend of organic mixed nuts, including almonds, cashews, walnuts, and pecans. Perfect for snacking, baking, or adding to salads.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 100",
      category: "Pharmacy",
      regularPrice: 11.99,
      discountPrice: 9.99,
      description: "Protect your skin from harmful UVA/UVB rays with Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 100. Lightweight and non-greasy formula for daily sun protection.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Kind Dark Chocolate Nuts & Sea Salt Bars",
      category: "Food",
      regularPrice: 1.49,
      discountPrice: 0.99,
      weight: "Each",
      description: "Satisfy your sweet and salty cravings with Kind Dark Chocolate Nuts & Sea Salt Bars. A delicious blend of almonds, peanuts, and dark chocolate.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Apple AirPods Pro",
      category: "Electronics",
      regularPrice: 249.99,
      discountPrice: 219.99,
      description: "Enjoy immersive sound and active noise cancellation with Apple AirPods Pro. Designed for comfort and a customizable fit for all-day listening.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Annie's Homegrown Organic Bunny Fruit Snacks",
      category: "Grocery",
      regularPrice: 4.99,
      discountPrice: 3.99,
      weight: "250",
      description: "Delightful organic fruit snacks shaped like bunnies, made with real fruit juice and no artificial flavors. A wholesome snack for kids and adults alike.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Claritin Non-Drowsy 24-Hour Allergy Relief Tablets",
      category: "Pharmacy",
      regularPrice: 19.99,
      discountPrice: 16.99,
      description: "Relieve allergy symptoms with Claritin Non-Drowsy Allergy Relief Tablets. Provides 24-hour relief from sneezing, runny nose, and itchy eyes.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Sabra Classic Hummus",
      category: "Food",
      regularPrice: 3.49,
      discountPrice: 2.79,
      weight: "200",
      description: "Enjoy the creamy and delicious taste of Sabra Classic Hummus. Made with chickpeas, tahini, and a touch of garlic for authentic Mediterranean flavor.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "DJI Mavic Air 2 Drone",
      category: "Electronics",
      regularPrice: 799.99,
      discountPrice: 749.99,
      description: "Capture stunning aerial photos and videos with the DJI Mavic Air 2 Drone. Compact and powerful with intelligent shooting modes for professional-quality results.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Kodiak Cakes Power Cakes Pancake & Waffle Mix",
      category: "Grocery",
      regularPrice: 5.99,
      discountPrice: 4.99,
      weight: "500",
      description: "Fuel your day with Kodiak Cakes Power Cakes Pancake & Waffle Mix. Packed with protein and whole grains for a hearty and nutritious breakfast.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "Oral-B Pro 1000 Electric Toothbrush",
      category: "Pharmacy",
      regularPrice: 49.99,
      discountPrice: 39.99,
      description: "Achieve a superior clean with the Oral-B Pro 1000 Electric Toothbrush. Removes up to 300% more plaque along the gumline than a manual toothbrush.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      productName: "RXBAR Protein Bars",
      category: "Food",
      regularPrice: 1.99,
      discountPrice: 1.49,
      weight: "100",
      description: "Enjoy the perfect combination of peanut butter and chocolate in RXBAR Protein Bars. Packed with 12g of protein and no artificial ingredients.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  
  
  export default productsSeedData;