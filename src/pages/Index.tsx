import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [ordersPerHour, setOrdersPerHour] = useState(2);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const avgOrderPrice = 350;
  const dailyIncome = hoursPerDay * ordersPerHour * avgOrderPrice;
  const weeklyIncome = dailyIncome * daysPerWeek;
  const monthlyIncome = weeklyIncome * 4.3;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🛵</span>
            </div>
            <span className="text-xl font-bold text-secondary">Яндекс Еда</span>
          </div>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-secondary font-semibold"
          >
            <a href="https://ya.cc/7peMsX" target="_blank" rel="noopener noreferrer">
              Начать работать
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-yellow-400 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Стань курьером Яндекс Еды
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 mb-8">
              Работай когда удобно, получай достойный доход и радуй людей вкусной едой
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              <a href="https://ya.cc/7peMsX" target="_blank" rel="noopener noreferrer">
                Зарегистрироваться сейчас
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12 animate-fade-in">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Гибкий график</h3>
                <p className="text-muted-foreground">
                  Работайте когда хотите: утром, днём или вечером. Сами решаете, сколько часов в день трудиться
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Wallet" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Быстрые выплаты</h3>
                <p className="text-muted-foreground">
                  Деньги приходят на карту дважды в неделю. Никаких задержек и скрытых комиссий
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="HeadphonesIcon" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Поддержка 24/7</h3>
                <p className="text-muted-foreground">
                  Всегда на связи служба поддержки. Решим любой вопрос быстро и оперативно
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
              Калькулятор дохода
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Посчитайте, сколько сможете зарабатывать
            </p>

            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-8">
                  <div>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-secondary">Часов работы в день</span>
                      <span className="text-xl font-bold text-primary">{hoursPerDay} ч</span>
                    </label>
                    <Slider
                      value={[hoursPerDay]}
                      onValueChange={(value) => setHoursPerDay(value[0])}
                      min={1}
                      max={12}
                      step={1}
                      className="[&_.slider-thumb]:bg-primary [&_.slider-track]:bg-primary"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-secondary">Заказов в час</span>
                      <span className="text-xl font-bold text-primary">{ordersPerHour}</span>
                    </label>
                    <Slider
                      value={[ordersPerHour]}
                      onValueChange={(value) => setOrdersPerHour(value[0])}
                      min={1}
                      max={4}
                      step={1}
                      className="[&_.slider-thumb]:bg-primary [&_.slider-track]:bg-primary"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-secondary">Дней в неделю</span>
                      <span className="text-xl font-bold text-primary">{daysPerWeek}</span>
                    </label>
                    <Slider
                      value={[daysPerWeek]}
                      onValueChange={(value) => setDaysPerWeek(value[0])}
                      min={1}
                      max={7}
                      step={1}
                      className="[&_.slider-thumb]:bg-primary [&_.slider-track]:bg-primary"
                    />
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">В день</div>
                        <div className="text-2xl font-bold text-secondary">
                          {dailyIncome.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">В неделю</div>
                        <div className="text-2xl font-bold text-secondary">
                          {weeklyIncome.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">В месяц</div>
                        <div className="text-2xl font-bold text-primary">
                          {Math.round(monthlyIncome).toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-secondary font-semibold text-lg px-8 py-6 h-auto"
              >
                <a href="https://ya.cc/7peMsX" target="_blank" rel="noopener noreferrer">
                  Начать зарабатывать
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
              Как это работает
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Регистрация</h3>
                  <p className="text-muted-foreground">
                    Заполните простую анкету онлайн — это займёт всего 5 минут
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Обучение</h3>
                  <p className="text-muted-foreground">
                    Пройдите короткий онлайн-курс и узнайте все секреты работы курьера
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Работа</h3>
                  <p className="text-muted-foreground">
                    Получайте заказы в приложении, доставляйте еду и зарабатывайте
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
              Частые вопросы
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border-2 border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline">
                  Что нужно для начала работы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Вам понадобится смартфон, велосипед или самокат, рюкзак и желание работать. Термосумку и другие материалы предоставим мы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border-2 border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline">
                  Как часто приходят деньги?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Выплаты происходят два раза в неделю автоматически на вашу банковскую карту. Никаких задержек.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border-2 border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline">
                  Можно ли работать на машине?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, можно работать на автомобиле, велосипеде, самокате или пешком — выбирайте удобный способ передвижения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border-2 border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline">
                  Нужен ли опыт работы курьером?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, опыт не требуется. Мы проводим онлайн-обучение и подробно рассказываем о всех тонкостях работы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border-2 border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline">
                  Как выбрать график работы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Вы полностью контролируете свой график. Включайте приложение когда хотите работать, выключайте когда нужен перерыв.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-secondary/80 mb-8">
              Присоединяйтесь к команде Яндекс Еды уже сегодня
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              <a href="https://ya.cc/7peMsX" target="_blank" rel="noopener noreferrer">
                Зарегистрироваться сейчас
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🛵</span>
              </div>
              <span className="font-semibold">Яндекс Еда</span>
            </div>
            <div className="text-sm text-white/60">© 2025 Информация о возможностях работы курьером</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;