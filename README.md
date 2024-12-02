## 代码提交说明
写新代码前先`git pull`，然后`git checkout -b newBranchName`，在新分支里写代码
写完提交到新分支然后pull request，请勿直接push到主分支

`node version: v16.20.0`

## 常用命令

### `yarn`
安装依赖

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 设计要求

- 组件必须可复用
- 不允许绕过 eslint （除了代码格式化）
- 天然响应式