module.exports = {
  extends: [
    "alloy",
    "alloy/typescript",
    // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
    "plugin:prettier/recommended",
  ],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    browser: true,
    node: true,
    es6: true,
    // mocha: true,
    jest: true,
    // jquery: true
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    // myGlobal: false
  },
  settings: {},
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    // TODO：代表要修复，没有标记则规则保留规则"off"状态
    // 结合prettier
    // TODO
    "prettier/prettier": "off",
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    // TODO
    "@typescript-eslint/class-name-casing": "off",
    // 在类属性和方法上需要显式的可访问性修饰符
    "@typescript-eslint/explicit-member-accessibility": "off",
    // 需要一致的成员声明顺序
    // TODO
    "@typescript-eslint/member-ordering": "off",
    // 禁止声明empty interfaces
    // TODO
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-this-alias": "off",
    // 确保了this.props在constructor完成之前就被赋值
    "@typescript-eslint/no-useless-constructor": "off",
    // TODO
    "@typescript-eslint/no-unused-expressions": "off",
    // TODO
    "@typescript-eslint/no-require-imports": "off",
    // TODO
    "@typescript-eslint/no-inferrable-types": "off",
    //  待定
    "@typescript-eslint/no-dynamic-delete": "off",
    // 首选使用简洁的可选链表达式，而不是使用链式逻辑
    // TODO
    "@typescript-eslint/prefer-optional-chain": "off",
    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // TODO
    "@typescript-eslint/prefer-for-of": "off",
    // 强制数组方法的回调函数中有 return 语句
    // TODO
    "array-callback-return": "off",
    // warn TODO
    complexity: "off",
    // 必须使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: "off",
    // 在使用 for in 遍历对象时，会把从原型链继承来的属性也包括进来。这样会导致意想不到的项出现
    // TODO
    "guard-for-in": "off",
    // 禁止变量申明时用逗号一次申明多个
    "max-params": "off",
    // 强制可嵌套的块的最大深度
    // TODO
    "max-depth": "off",
    // TODO warn
    "no-console": "off",
    // 禁止对函数的参数重新赋值
    // TODO
    "no-param-reassign": "off",
    // 要求使用 let 或 const 而不是 var
    // TODO
    "no-var": "off",
    "no-useless-constructor": "off",
    // 禁止在嵌套的块中出现 function 或 var 声明
    // TODO
    "no-inner-declarations": "off",
    // 关闭禁止不必要的布尔类型转换
    "no-extra-boolean-cast": "off",
    // 禁止重复导入模块，可留
    // TODO
    "no-duplicate-imports": "off",
    // 禁止使用较短的符号实现类型转换
    "no-implicit-coercion": "off",
    // 在 return 语句中不使用赋值
    // TODO
    "no-return-assign": "off",
    // TODO
    "no-eq-null": "off",
    // TODO
    "no-unused-expressions": "off",
    // 不允许使用逗号操作符
    // TODO
    "no-sequences": "off",
    //  async function 的返回值总是封装在 Promise.resolve，return await 实际上并没有做任何事情，只是在 Promise resolve 或 reject 之前增加了额外的时间
    // TODO
    "no-return-await": "off",
    // 禁止在对象中使用不必要的计算属性
    "no-useless-computed-key": "off",
    // 禁止在条件语句中出现赋值操作符
    // TODO
    "no-cond-assign": "off",
    // 禁止在条件中使用常量表达式
    // TODO warn
    "no-constant-condition": "off",
    // TODO
    "no-labels": "off",
    // TODO
    "no-useless-call": "off",
    "no-undef": "off",
    // TODO
    "no-case-declarations": "off",
    // TODO
    "no-lone-blocks": "off",
    // TODO
    "no-empty": "off",
    "one-var": "off",
    // TODO
    "prefer-promise-reject-errors": "off",
    //TODO
    "prefer-object-spread": "off",
    // 默认情况下，parseInt()将自动检测十进制和十六进制(通过0x前缀),可留
    // TODO
    radix: "off",
    // 强制在注释中 // 或 /* 使用一致的空格，可留，修改很大
    // TODO
    "spaced-comment": "off",
    // 条件判断中字面量在先而变量在第二的位置
    yoda: "off",
    // 防止没有子组件的组件使用额外的结束标签
  },
};
