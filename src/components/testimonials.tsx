'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import ava from '../../public/3135715.png'
import { Card, CardContent } from '../components/ui/card'

const testimonials = [
  {
    name: "Lina A",
    role: "Product Manager",
    image: ava,
    rating: 5,
    text: " الشغل كان سريع وممتاز واحترافي ومارح يكون اخر تعامل معه اوصي بالاستاذ محمود بالتوفيق يارب"  
  
  },
  {
    name: "Ibrahim Ali",
    role: "Product Manager",
    image: ava,
    rating: 5,
    text: "متقبل للتعديلات اشكرك استاذ محمود",
  },
  {
    name: "Emma Davis",
    role: "SEO in company",
    image: ava,
    rating: 5,
    text: "الموقع الذي أنشأه محمود لنا ليس جميلًا فقط ولكنه أيضًا يعمل بشكل ممتاز. معرفته بـ React وNext.js ظهرت بوضوح في المنتج النهائي. سأعمل معه بالتأكيد مرة أخرى.",
  },
  {
    name: "Ahmed Alseufyy",
    role: "SEO in Ningi company",
    image: ava,
    rating: 5,
    text:"كالعادة باشمهندس محمود ، شغل ممتاز جدا ودقه بالمواعيد وتسليم العمل بشكل احترافي وسريع وقبل الموعد المتفق عليه.",
  },
  {
    name: "Ahmed Alseufy",
    role: "SEO in Ningi company",
    image: ava,
    rating: 5,
    text:"كالعاده الباشمهندس محمود دقه ومواعيد وشغل ممتاز شكرا جزيلا ياهندسه",
  },
  {
    name: "عبدالله",
    role: "CTO at InnovateTech",
    image: ava,
    rating: 5,
    text :"خدمة جيدة اشكرك استاذ محمود",
  },
  {
    name: "Mustafa",
    role: "كاتب محتوى مواقع",
    image: ava,
    rating: 5,
    text:"شكرا للمهندس محمود, شخص جدا محترم ومتجاوب, خبرته ممتازة جدا, نفذ الطلب وجميع التعديلات بسرعة وبمهارة, أنصح الجميع بالتعامل معه, شكرا لك",
  },
  {
    name: "Yasser Abu lehyeh",
    role: "مهندس برمجيات",
    image: ava,
    rating: 5,
    text:"متعاون جداً وخبير في عمله",
  },
  {
    name: "Yasser",
    role: "مهندس برمجيات",
    image: ava,
    rating: 5,
    text:"تعامل للمرة الثانية , خبرة واسعة وعمل احترافي",
  },
  {
    name: "Faysal",
    role: "مهندس شبكات",
    image: ava,
    rating: 5,
    text :"اشكرك جزيل الشكر كانت سرعة التنفيذ ممتازة جدا تجاوبك وسعة صدرك شكرا لك مرة أخرى"
  },
  {
    name: "Good W",
    role: " مدخل بيانات",
    image: ava,
    rating: 5,
    text:"التنفيذ ممتازة جدا واحترافي وسرعة في التنفيذ والتجاوب مع العميل",  
},
{
  name: "ابراهيم",
  role: "مدير مشاريع",
  image: ava,
  rating: 5,
  text:"بكل امانه يستحق كلمة مبدع",  
},
{
  name: "زياد",
  role: "مدير مشاريع",
  image: ava,
  rating: 5,
  text:"ممتازا جدااا",  
}


]

export default function Testimonials() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{color:"#018171"}}></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here's what some of my clients have to say about their experiences working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

