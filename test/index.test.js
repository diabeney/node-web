const path = require("path");

function printError(err) {
  if (err instanceof Error) {
    return `Error: ${err.message}`;
  } else {
    return `Error: ${err}`;
  }
}

function validateDynamicRouteName(dirName) {
  const isValid = dirName.match(/^\[\s*\S.*\S\s*\]$/gi);
  return isValid;
}

function execute(err) {
  return printError(err);
}

test("should print the correct type of error", () => {
  expect(execute(new Error("An error"))).toBe("Error: An error");
});
test("should print the correct type of error", () => {
  expect(execute("Error")).toBe("Error: Error");
});

test("valid dynamic route convention", () => {
  expect(validateDynamicRouteName("[slug")).toBe("slug");
});
