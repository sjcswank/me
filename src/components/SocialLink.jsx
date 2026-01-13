const SocialLink = ({ href, icon: Icon, label, external = true }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-gray-400 hover:text-white transition-all hover:scale-125 hover:-translate-y-1 active:scale-110 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default SocialLink;
