using System.ComponentModel.DataAnnotations;

namespace ContactFormApp.Models
{
    public class Contact
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Department { get; set; }

        [Required]
        public string Message { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}