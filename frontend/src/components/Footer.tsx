export default function Footer() {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container flex justify-between items-center">
        <div className="text-3xl text-white font-bold tracking-tight">Booking.com</div>
        <div className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
