# Invoice navigator

An enterprise web platform designed based on real business processes within a company.

![Status](https://img.shields.io/badge/finished-green?style=for-the-badge)

## 📚 Table of Contents
- [About](#-about)
- [Features](#-features)
- [Installation and usage](#-installation-and-usage)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)


## 🧠 About

it's a project created to improve invoices management in companies, providing full control over invoices status and tracking across departments.

## 🌟 Features

- Main Dashboard displaying invoice status information by month and day
- Task Manager
- Invoice data table
- Download invoices as PDF
- change invoices status (Pending, Accepted, Rejected)
- Add notes for rejected invoices
- advanced filters and search panel
- Report and analytics view
- admin panel

## ⚙️ Installation and usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Mauricio650/InvoNavigator.git
   
   cd InvoNavigator/frontend/InvoiceNavigator/

   pnpm install

   pnpm run dev
   ```

2. environment variables

    2.1 Create a .env file with the following variable

    ```bash
    VITE_API_LOCAL = 'Backend URL'
    ``` 

**Important**

>  🧩 Note: The Backend of this project is available in a separate repository
[Invoice navigator Backend](https://github.com/Mauricio650/InvoNavigatorBackend)

>  🧩 Note: If you want to see the projects logging with the following credentials, can not use admin panel but you can see the others actions.
User = User4
Password = ContraInvi2

## 🧰 Tech stack

- **Frontend:** React, React Router DOM, js, html,CSS, TailwindCSS
- **Data table:** [Mui x](https://mui.com/x/react-data-grid/)
- **Validations:** [Zod](https://zod.dev/)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/)
- **Toast Notifications:** [Sonner](https://github.com/emilkowalski/sonner)
- **Charts:** [react-chartjs-2](https://react-chartjs-2.js.org/), [chart.js](https://www.chartjs.org/)

## 🤝 Contributing

Contributions, issues, and features requests are welcome!
Feel free to fork this repo and submit and pull request.

## 📄 License

This project is licensed under MIT License


## 👤 Author

**Mauricio ibañez bermudez**
**GitHub:** https://github.com/Mauricio650