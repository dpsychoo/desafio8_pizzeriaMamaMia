const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Pizzeria. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
