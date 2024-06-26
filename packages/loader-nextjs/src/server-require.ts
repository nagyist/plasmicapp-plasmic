import type * as FS from "fs";

let secretRequire: ((module: string) => any) | undefined;
try {
  // Secretly use require/import without webpack knowing
  // eslint-disable-next-line
  secretRequire = eval("require");
} catch (err) {
  try {
    // eslint-disable-next-line
    secretRequire = eval("(module) => import(module)");
  } catch (err) {
    secretRequire = undefined;
  }
}

export async function serverRequire<T>(module: string): Promise<T> {
  if (!secretRequire) {
    throw new Error(
      `Unexpected serverRequire() -- can only do this from a Node server!`
    );
  }
  return secretRequire(module) as Promise<T>;
}

export async function serverRequireFs() {
  return serverRequire<typeof FS>("fs");
}
