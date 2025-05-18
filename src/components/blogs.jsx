import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from "framer-motion";

const blogPosts = [
  { id: '1', title: 'Lego Turns Santa: A Heartwarming Customer Story', date: '2025-05-01', excerpt: 'When a young boy lost his cherished Ninjago figure, Lego’s customer service went above and beyond to bring joy back into his life.' },
  { id: '2', title: 'Whirlaway Sports: Personalized Shoe Shopping Experience', date: '2025-04-28', excerpt: 'A customer shares how personalized service at Whirlaway Sports made his running shoe purchase memorable.' },
  { id: '3', title: 'Customer Satisfaction at the Push of a Button', date: '2025-04-15', excerpt: 'How HappyOrNot’s simple feedback terminals transformed customer satisfaction measurement across various industries.' },
  { id: '4', title: '5 Simple Yet Powerful Steps to Improve Customer Happiness', date: '2025-04-10', excerpt: 'RingCentral outlines actionable steps businesses can take to enhance customer happiness and loyalty.' },
  { id: '5', title: 'Customer Happiness: What It Means + 7 Ways to Achieve It', date: '2025-04-05', excerpt: 'HubSpot delves into the concept of customer happiness and provides strategies to achieve it.' },
  { id: '6', title: 'Tech Innovations in Customer Service', date: '2025-04-01', excerpt: 'Exploring the role of artificial intelligence in improving customer service and engagement.' },
  { id: '7', title: 'How Personalization Can Drive Customer Retention', date: '2025-03-28', excerpt: 'Why personalization strategies are key to keeping customers loyal in an increasingly competitive market.' },
  { id: '8', title: 'Building Trust in Customer Relationships', date: '2025-03-20', excerpt: 'The importance of building long-lasting trust with your customers and strategies to achieve it.' },
  { id: '9', title: 'The Future of E-commerce Customer Support', date: '2025-03-15', excerpt: 'How customer support in e-commerce is evolving and the trends to watch out for in the coming years.' },
  { id: '10', title: 'AI Chatbots vs Human Support: A Comparative Study', date: '2025-03-10', excerpt: 'What’s better for customer support—AI chatbots or human agents? We dive into the pros and cons of each.' },
  { id: '11', title: 'Customer-Centric Marketing Strategies for 2025', date: '2025-03-05', excerpt: 'Learn how to tailor your marketing strategies to place customers at the center of your brand’s growth.' },
  { id: '12', title: 'Creating Memorable Customer Experiences Through Storytelling', date: '2025-02-28', excerpt: 'How storytelling can create powerful, memorable experiences that connect with your customers.' },
  { id: '13', title: 'Harnessing the Power of Customer Reviews', date: '2025-02-20', excerpt: 'How customer reviews can be leveraged for growth, from product improvements to enhanced brand reputation.' },
  { id: '14', title: 'Why Your Business Needs a Customer Success Program', date: '2025-02-18', excerpt: 'The benefits of implementing a customer success program to improve client satisfaction and retention.' },
  { id: '15', title: 'Top 10 Customer Service Mistakes to Avoid', date: '2025-02-10', excerpt: 'A list of common customer service mistakes and how to avoid them to ensure positive customer experiences.' },
  { id: '16', title: 'How to Manage Customer Expectations Effectively', date: '2025-02-05', excerpt: 'Setting and managing customer expectations is critical to long-term success—here’s how to do it right.' },
  { id: '17', title: 'Why Customer Service is the Backbone of a Successful Business', date: '2025-02-01', excerpt: 'Customer service is at the core of business success—this post explores why and how it drives business growth.' },
  { id: '18', title: 'Empathy in Customer Support: A Game Changer', date: '2025-01-28', excerpt: 'Why empathy is the most powerful tool in customer support, and how it can transform the customer experience.' },
  { id: '19', title: 'The Importance of Feedback in Customer Service', date: '2025-01-20', excerpt: 'How actively seeking and implementing customer feedback can improve service and create loyal customers.' },
  { id: '20', title: 'The Role of Technology in Enhancing Customer Engagement', date: '2025-01-15', excerpt: 'An exploration of how technology can create deeper and more meaningful customer engagement across platforms.' },
  { id: '21', title: 'The Rise of Self-Service in Customer Support', date: '2025-01-10', excerpt: 'How businesses are shifting toward self-service platforms to improve efficiency and customer satisfaction.' },
  { id: '22', title: 'Why Customer Experience Should Be Your Top Priority', date: '2025-01-05', excerpt: 'Focusing on customer experience can improve your brand’s reputation and bottom line—here’s why it’s essential.' },
  { id: '23', title: 'How Omnichannel Support Improves Customer Satisfaction', date: '2024-12-30', excerpt: 'The benefits of offering omnichannel support to enhance the customer experience across all touchpoints.' },
  { id: '24', title: 'From Reactive to Proactive: A New Approach to Customer Service', date: '2024-12-25', excerpt: 'Moving from reactive customer service to proactive engagement can significantly improve satisfaction and loyalty.' },
  { id: '25', title: 'The Secret to High-Quality Customer Support', date: '2024-12-20', excerpt: 'What sets high-quality customer support apart and how businesses can provide it consistently.' },
  { id: '26', title: 'How to Use Data to Improve Customer Service', date: '2024-12-10', excerpt: 'Leveraging data analytics to enhance customer service performance and satisfaction.' },
  { id: '27', title: 'Customer Service Trends to Watch in 2025', date: '2024-12-05', excerpt: 'The most important customer service trends to keep an eye on as we move into 2025.' },
  { id: '28', title: 'The Impact of Personalization in Customer Service', date: '2024-11-30', excerpt: 'How personalizing customer interactions can create more meaningful connections and improve loyalty.' },
  { id: '29', title: 'Why Customer Support is a Key Growth Driver', date: '2024-11-20', excerpt: 'Exploring the role of customer support in fueling business growth and how to make it a priority.' },
  { id: '30', title: 'How to Build a Customer-First Culture', date: '2024-11-15', excerpt: 'Creating a customer-first culture is essential for long-term business success—here’s how to achieve it.' }
];


const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem',
  },
  paper: {
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  img: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    flexWrap: 'wrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  date: {
    color: '#888',
    fontSize: '0.875rem',
  },
  excerpt: {
    marginTop: '0.5rem',
    color: '#555',
    wordWrap: 'break-word', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

function BlogsComponent() {
  return (
    <Container style={styles.container} sx={{display:"flex", flexWrap:"wrap" , justifyContent:'center'}}>
      <Grid container spacing={4}  sx={{display:"flex", flexWrap:"wrap" , justifyContent:'center'}}>
        {blogPosts.map((post) => {
          const isEven = parseInt(post.id) % 2 === 0;
          return (
            <Grid item xs={12} sm={6} md={4} key={post.id} sx={{width:"350px"}}>
              <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Paper style={styles.paper}>
                  <Typography style={styles.title} noWrap={false}>
                    {post.title}
                  </Typography>
                  <Typography style={styles.date}>{post.date}</Typography>
                  <Typography style={styles.excerpt} noWrap={false}>
                    {post.excerpt}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default BlogsComponent;
