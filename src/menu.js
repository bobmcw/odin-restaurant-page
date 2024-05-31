import coffee from "./images/coffee.jpeg";
import tea from "./images/tea.jpeg";
import lemonade from "./images/lemonade.jpeg";
import britishBreakfast from './images/britishBreakfast.jpeg';
import omlet from './images/omlet.jpeg';
import pancakes from './images/pancakes.jpeg';
import curry from './images/curry.jpeg';
import burger from './images/burger.jpeg';
import dumplings from './images/dumplings.jpeg';
const menuItem = (itemname, description, imagesrc) => {
  const item = document.createElement("div");
  item.classList.add("menuItem");
  const header = document.createElement("h4");
  header.innerText = itemname;
  const desc = document.createElement("p");
  desc.innerText = description;
  const image = document.createElement("img");
  image.src = imagesrc;
  item.appendChild(header);
  item.appendChild(desc);
  item.appendChild(image);
  return item;
};
export default function renderMenu() {
  const menuBody = document.createElement("div");
  menuBody.classList.add("menu");
  const beverageHeader = document.createElement("h2");
  const beverages = document.createElement("div");
  beverages.classList.add("category");
  beverageHeader.innerText = "Beverages";
  beverages.appendChild(beverageHeader);
  beverages.appendChild(
    menuItem("coffee", "a tasty black coffee to start your day off!", coffee)
  );
  beverages.appendChild(
    menuItem(
      "tea",
      "a fresh tea with ginger, lemon and mint, a perfect fit for your breakfast!",
      tea
    )
  );
  beverages.appendChild(
    menuItem(
      "lemonade",
      "a fresh, homemade lemonade made from fresh lemons, ice cold prefect for a hot day",
      lemonade
    )
  );
  menuBody.appendChild(beverages);

  const breakfasts = document.createElement("div");
  breakfasts.classList.add("category");
  const breakfastsheader = document.createElement("h2");
  breakfastsheader.innerText = "Breakfasts";
  breakfasts.appendChild(breakfastsheader);
  breakfasts.appendChild(
    menuItem(
      "English Breakfast",
      "An english breakfast is a perfect package to start your day off!",
      britishBreakfast
    )
  );
  breakfasts.appendChild(
    menuItem(
      "Omlet",
      "A simple omelette is fit to satisfy hunger, a perfect fit for a breakfast",
      omlet
    )
  );
  breakfasts.appendChild(
    menuItem(
      "pancakes",
      "banana pancakes that mix up quickly and are a fantastic change from the usual buttermilk pancakes. The whole family will love these for breakfast!",
      pancakes
    )
  );
  menuBody.appendChild(breakfasts);

  const diners = document.createElement("div");
  diners.classList.add("category");
  const dinerheader = document.createElement("h2");
  dinerheader.innerText = "Dinners";
  diners.appendChild(dinerheader);
  diners.appendChild(
    menuItem(
        "Coconut curry shrimp",
        "This coconut curry shrimp is mildly spicy and creamy, and brimming with Thai-inspired flavors such as curry paste, lemongrass, and ginger!",
        curry
    )
  );
  diners.appendChild(
    menuItem(
        "chili burger",
        "this burger is a perfect item for all meat lovers and those who like a bit of spice in their food!",
        burger
    )
  );
  diners.appendChild(
    menuItem(
        "dumplings",
        "Homemade dumpling wrappers packed with a tofu and veggie filling! These vegetable dumplings are pan-fried to get that really nice golden brown crust before being served!",
        dumplings
    )
  );
  menuBody.appendChild(diners);
  return menuBody;
}
