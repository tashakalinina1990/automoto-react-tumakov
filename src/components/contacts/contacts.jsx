import React from "react";
import ContactsMap from "../contacts-map/contacts-map";
import "./contacts.scss";

const Contacts = () => (
  <section className="contacts tabs__contacts">
    <div className="contacts__description">
      <h4>Адрес</h4>
      <p>Санкт-Петербург, набережная реки Карповки, дом 5</p>
      <h4>Режим работы</h4>
      <p>Ежедневно, с 10:00 до 21:00</p>
      <h4>Телефон</h4>
      <p>8 (800) 333-55-99</p>
      <h4>E-mail</h4>
      <p>info@avto-moto.ru</p>
    </div>
    <ContactsMap className="contacts__map" />
  </section>
);

export default Contacts;
