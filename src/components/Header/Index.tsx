import { ForkKnife, MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "../form/Input"
import { FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const Header = () => {

  const [params, setParams] = useSearchParams();

  const [name, setName] = useState(params.get("name") ?? "")

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({
      name: name
    })
  }

  return (
    <form onSubmit={(e) => handleSearch(e)} className="flex items-center mb-14 justify-between">
      <div onClick={handleNavigateHome} className="hover:cursor-pointer">
        <ForkKnife size="24" className="text-zinc-300" />
      </div>
      <Input
        name="name"
        defaultValue={name}
        onChange={(e) => setName(e.currentTarget.value)}
        rightIcon={<MagnifyingGlass size="24" className="text-zinc-500" />}
      />
      <div>
      </div>
    </form>
  )
}

export { Header }