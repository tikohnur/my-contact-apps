import CreateButtons from "@/components/Buttons";
import ContactTable from "@/components/ContactTable";
import Search from "@/components/Search";


export default function Contact() {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex item-center justify-between gap-1 mb-5">
          <Search />
          <CreateButtons />
        </div>
        <ContactTable />
    </div>
  )
}
