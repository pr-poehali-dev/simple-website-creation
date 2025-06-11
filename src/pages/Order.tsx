import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
    paymentMethod: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заказ оформлен:", formData);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="flex items-center text-coffee-500 hover:text-coffee-600"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться на главную
          </Link>
        </div>
      </header>

      {/* Order Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-playfair font-bold text-coffee-500 mb-4">
              Оформление заказа
            </h1>
            <p className="text-xl text-coffee-400 font-inter">
              Заполните форму и мы свяжемся с вами для подтверждения
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-coffee-500 to-coffee-600 text-white">
              <CardTitle className="text-2xl font-playfair flex items-center">
                <Icon name="ShoppingCart" size={24} className="mr-3" />
                Детали заказа
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-coffee-500 font-medium"
                    >
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-coffee-200 focus:border-coffee-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-coffee-500 font-medium"
                    >
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-coffee-200 focus:border-coffee-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-coffee-500 font-medium"
                  >
                    Адрес доставки *
                  </Label>
                  <Input
                    id="address"
                    placeholder="Улица, дом, квартира"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="border-coffee-200 focus:border-coffee-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="payment"
                    className="text-coffee-500 font-medium"
                  >
                    Способ оплаты *
                  </Label>
                  <Select
                    value={formData.paymentMethod}
                    onValueChange={(value) =>
                      setFormData({ ...formData, paymentMethod: value })
                    }
                  >
                    <SelectTrigger className="border-coffee-200 focus:border-coffee-500">
                      <SelectValue placeholder="Выберите способ оплаты" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Банковская карта</SelectItem>
                      <SelectItem value="cash">Наличными курьеру</SelectItem>
                      <SelectItem value="sbp">
                        СБП (Система быстрых платежей)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="comment"
                    className="text-coffee-500 font-medium"
                  >
                    Комментарий к заказу
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder="Особые пожелания, время доставки..."
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    className="border-coffee-200 focus:border-coffee-500 min-h-[100px]"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-accent hover:bg-orange-accent/90 text-white py-4 text-lg"
                  >
                    <Icon name="Check" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-gradient-to-r from-cream-100 to-cream-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Icon name="Info" size={24} className="text-coffee-500 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-coffee-500 mb-2">
                    Информация о доставке
                  </h3>
                  <ul className="text-coffee-400 font-inter space-y-1">
                    <li>• Доставка в пределах города — 200 ₽</li>
                    <li>• Бесплатная доставка при заказе от 1000 ₽</li>
                    <li>• Время доставки: 30-60 минут</li>
                    <li>• Работаем с 8:00 до 22:00</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Order;
