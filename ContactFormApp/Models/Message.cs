using System;

namespace ContactFormApp.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Content { get; set; }
        public DateTime SentDate { get; set; }
    }
}
