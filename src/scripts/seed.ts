import { PrismaClient, Style } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear previous data
  // await prisma.inquiry.deleteMany(); // uncomment if Inquiry model exists
  await prisma.plan.deleteMany();

  const plans = [
    { title: "Modern Minimal 1600", style: Style.MODERN, floors: 2, bhk: 3, areaSft: 1600 },
    { title: "Contemporary Tropical 2250", style: Style.TROPICAL, floors: 3, bhk: 4, areaSft: 2250 },
    { title: "Newari-Inspired 1750", style: Style.NEWARI, floors: 2, bhk: 3, areaSft: 1750 },
    { title: "Scandinavian Compact 1150", style: Style.SCANDI, floors: 2, bhk: 2, areaSft: 1150 },
    { title: "Mountain Chalet 1900", style: Style.CHALET, floors: 2, bhk: 3, areaSft: 1900 },
    { title: "Urban Duplex 2100", style: Style.DUPLEX, floors: 3, bhk: 4, areaSft: 2100 },
  ];

  for (const plan of plans) {
    await prisma.plan.create({ data: plan });
  }

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
