// ==================================================
// TravelMate AI - Prisma Database Seeder
// Seeds PostgreSQL database with demo destinations, hotels, and transportation
// ==================================================

const { PrismaClient } = require("@prisma/client");
const { cancellationPolicies, destinations, hotels, transportationOptions, activities } = require("../src/utils/sampleData");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting TravelMate AI Database Seeding (PostgreSQL)...");

  // 1. Seed Cancellation Policies
  console.log("Seeding cancellation policies...");
  for (const policy of cancellationPolicies) {
    await prisma.cancellationPolicy.upsert({
      where: { id: policy.id },
      update: {},
      create: {
        id: policy.id,
        name: policy.name,
        description: policy.description,
        refundPercentage: policy.refundPercentage,
        daysBeforeTrip: policy.daysBeforeTrip
      }
    });
  }

  // 2. Seed Destinations
  console.log("Seeding destinations...");
  for (const dest of destinations) {
    await prisma.destination.upsert({
      where: { id: dest.id },
      update: {
        imageUrl: dest.imageUrl,
        galleryImages: dest.galleryImages || [],
        shortDescription: dest.shortDescription,
        state: dest.state,
        countryCode: dest.countryCode
      },
      create: {
        id: dest.id,
        name: dest.name,
        city: dest.city,
        state: dest.state,
        country: dest.country,
        countryCode: dest.countryCode,
        description: dest.description,
        shortDescription: dest.shortDescription,
        imageUrl: dest.imageUrl,
        galleryImages: dest.galleryImages || [],
        latitude: dest.latitude,
        longitude: dest.longitude,
        timezone: dest.timezone,
        popular: Boolean(dest.popular),
        popularity: dest.popularity,
        status: dest.status || "ACTIVE",
        attractions: dest.attractions,
        isDomestic: dest.isDomestic,
        isActive: dest.isActive
      }
    });
  }

  // 3. Seed Hotels & Rooms
  console.log("Seeding hotels, rooms, and images...");
  for (const h of hotels) {
    const { rooms, roomTypes, images, isDemo, roomAvailability, priceNotice, ...hotelData } = h;
    await prisma.hotel.upsert({
      where: { id: h.id },
      update: {
        city: h.city,
        state: h.state,
        country: h.country,
        countryCode: h.countryCode,
        fullAddress: h.fullAddress,
        latitude: h.latitude,
        longitude: h.longitude,
        shortDescription: h.shortDescription,
        officialWebsite: h.officialWebsite,
        phone: h.phone,
        email: h.email,
        pricingMode: h.pricingMode,
        liveAvailability: h.liveAvailability,
        availabilityStatus: h.availabilityStatus,
        sourceUrl: h.sourceUrl,
        verifiedAt: h.verifiedAt ? new Date(h.verifiedAt) : null
      },
      create: {
        ...hotelData,
        verifiedAt: hotelData.verifiedAt ? new Date(hotelData.verifiedAt) : null,
        rooms: {
          create: (rooms || []).map(r => {
            const { isDemo: rDemo, maxGuests, bedType, roomSize, price, pricingMode, availableRooms, ...roomData } = r;
            return {
              id: roomData.id,
              type: roomData.type,
              capacity: roomData.capacity || 2,
              pricePerNight: roomData.pricePerNight,
              totalRooms: roomData.totalRooms || 10,
              availableRooms: null,
              amenities: roomData.amenities || [],
              imageUrls: roomData.imageUrls || []
            };
          })
        },
        hotelImages: {
          create: (images || []).map(img => ({
            url: typeof img === "string" ? img : img.url,
            type: typeof img === "object" ? img.type : "exterior",
            alt: typeof img === "object" ? img.alt : h.name,
            source: typeof img === "object" ? img.source : "Official/Media"
          }))
        }
      }
    });
  }

  // 4. Seed Transportation
  console.log("Seeding transportation routes...");
  for (const t of transportationOptions) {
    const { isDemo, ...transData } = t;
    await prisma.transportation.upsert({
      where: { id: t.id },
      update: {},
      create: transData
    });
  }

  // 5. Seed Activities
  console.log("Seeding destination activities...");
  for (const act of activities) {
    const { isDemo, ...actData } = act;
    await prisma.activity.upsert({
      where: { id: act.id },
      update: {},
      create: actData
    });
  }

  console.log("✅ Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error while seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
