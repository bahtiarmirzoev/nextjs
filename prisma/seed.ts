import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Создание пользователя
  const user = await prisma.user.create({
    data: {
      fullName: "Иван Иванов",
      email: "ivan@example.com",
      password: "hashed_password", // в реальности хэшируй!
    },
  });

  // Создание адреса
  const address = await prisma.adress.create({
    data: {
      street: "ул. Ленина, 1",
      city: "Баку",
      country: "Азербайджан",
      district: "Сабаиль",
      zipCode: "AZ1000",
    },
  });

  // Создание категории
  const category = await prisma.category.create({
    data: {
      name: "Классические",
      description: "Популярные пиццы для всех",
    },
  });

  // Создание ингредиентов
  const cheese = await prisma.ingredients.create({
    data: {
      name: "Сыр",
      isVegetarian: true,
    },
  });

  const tomato = await prisma.ingredients.create({
    data: {
      name: "Томат",
      isVegetarian: true,
    },
  });

  // Создание пиццы
  const pizza = await prisma.pizza.create({
    data: {
      name: "Маргарита",
      description: "Традиционная пицца с сыром и томатами",
      price: 12.5,
      image: "margherita.png",
      size: 30,
      categoryId: category.id,
      ingredients: {
        create: [{ ingredientId: cheese.id }, { ingredientId: tomato.id }],
      },
    },
  });

  // Создание заказа с этой пиццей
  await prisma.order.create({
    data: {
      userId: user.id,
      adressId: address.id,
      orderItems: {
        create: [
          {
            pizzaId: pizza.id,
            quantity: 2,
            price: pizza.price,
          },
        ],
      },
    },
  });

  console.log("✅ Данные успешно добавлены!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
