export default function Dashboard() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        
        <h1 className="text-3xl font-bold mb-6">Medical Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Disease 1</h2>
            <img src="https://img.freepik.com/free-photo/close-up-hands-holding-covid-sample_23-2148747832.jpg?t=st=1727691977~exp=1727695577~hmac=f8d2ae65b096aa1789a436e9725d897e70fa1f51deaf35dc349b7b5f6b13c853&w=996" alt="Disease 1" className="w-full h-40 object-cover rounded" />
          </div>
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Disease 2</h2>
            <img src="https://img.freepik.com/free-vector/two-ecg-lines-red-glyph_78370-1006.jpg?t=st=1727692033~exp=1727695633~hmac=7da51ea486ecd3246f405a4dfc345affd04629a642c53da6573c812534cab1de&w=996" alt="Disease 2" className="w-full h-40 object-cover rounded" />
          </div>
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Disease 3</h2>
            <img src="https://img.freepik.com/free-photo/person-hand-holding-monitor-with-cardiogram_23-2147934569.jpg?t=st=1727692061~exp=1727695661~hmac=bb23b49ef4d9200702a1292a3242fab41d5a8aab4331264f0f6b65ed6962ebd8&w=996" alt="Disease 3" className="w-full h-40 object-cover rounded" />
          </div>
        </div>
      </div>
    );
  }
  