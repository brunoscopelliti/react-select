import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "package/src/index.js",
  output: [
    {
      exports: "named",
      file: "package/dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "package/dist/index.es.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelHelpers: "bundled" }),
    commonjs(),
  ],
};
