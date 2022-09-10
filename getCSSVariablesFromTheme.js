import theme from "./src/view/UI/theme/index.js";
import fs from "fs";

/**
 * Массив CSS переменных.
 */
const variables = [];

/**
 * Поля, по которым мы не создаем переменные. Они содержат невалидные значения, н-р функции.
 * Переписать с использованием библиотеки https://www.npmjs.com/package/is-css-color
 */
const blackList = [
  "-mode",
  "-text-primary-channel",
  "-text-secondary-channel",
  "-action-active-channel",
  "-action-selected-channel",
  "-get-contrast-text",
  "-augment-color",
];

/**
 * Обогащает variables из темы MUI.
 */
const getVars = (obj, path = "") => {
  let prefix = "--yy";
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (typeof obj[key] === "object") {
      getVars(obj[key], "-" + key);
    } else {
      const value = path + "-" + key;
      const formattedValue = value
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLocaleLowerCase();
      if (!blackList.includes(formattedValue)) {
        const variable = prefix + formattedValue + ": " + obj[key] + ";";
        variables.push(variable);
      }
    }
  });
};

getVars(theme.palette);

/**
 * Обработчик ошибок.
 * @param err
 */
function errorCallback(err) {
  if (err) {
    return console.log(err);
  }
}

/**
 * Шаблон файла
 * @type {string}
 */
const template = `:root {
  ${variables.join("")}
}
`;

/**
 * Создает соответствующий файл с CSS переменными.
 */
fs.writeFile("./public/styles/mui-variables.css", template, errorCallback);
