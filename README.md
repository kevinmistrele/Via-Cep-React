# 📦 ViaCEP React Project

A simple and elegant React-based project that integrates with the [ViaCEP API](https://viacep.com.br/) to search for Brazilian ZIP codes (CEPs) and automatically fill in address details.
The interface is built using **[shadcn/ui](https://ui.shadcn.com/)** and **TailwindCSS**, providing a clean and responsive user experience.

---

## 🚀 Tech Stack

* **React (Vite + TypeScript)** — for a fast, modern, and type-safe front-end.
* **shadcn/ui** — pre-styled, accessible UI components built on top of Radix UI.
* **TailwindCSS** — utility-first CSS framework for rapid styling.
* **ViaCEP API** — free public REST API that provides address data for Brazilian ZIP codes.
* **Lucide-React** — Very common to use icons from this library.

---

## 🧠 What is ViaCEP?

[ViaCEP](https://viacep.com.br/) is an open web service that allows developers to fetch address information (such as street, neighborhood, city, and state) by providing a valid Brazilian ZIP code (CEP).
It’s commonly used to simplify form filling processes and enhance user experience on registration or checkout pages.

---

## 🧩 Features

* Search address data by CEP (with or without hyphen).
* Automatic population of address fields (street, neighborhood, city, state).
* Input validation and error handling.
* Modern UI design using shadcn components and Tailwind.
* Responsive layout (works on desktop and mobile).

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kevinmistrele/Via-Cep-React.git
cd via-cep-react
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)


## 🔍 Example API Request

**GET** `https://viacep.com.br/ws/01001000/json/`

**Response:**

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

---

## 🪶 Video Test

https://github.com/user-attachments/assets/b7cbe807-c2b8-4125-94e2-fcb20f9eaa73

---

## 🧑‍💻 Author

Developed by **Kevin Tavares Mistrele**


---

⭐ If you like this project, consider giving it a star on GitHub!
