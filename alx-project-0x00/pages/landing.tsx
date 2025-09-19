import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <div>
                <h1 className=" text-xl font-extralight">Landing Page</h1>
                <Card />
            </div>
            <div className="space-x-4 my-3">
                <Button title="small" styles="text-sm px-2 py-1 rounded-md" />
                <Button title="medium" styles="text-md px-4 py-2 rounded-lg" />
                <Button title="large" styles="text-lg px-6 py-3 rounded-full" />
            </div>
            <div className="space-x-4 mt-6">
                <Button title="Rounded SM" styles="px-4 py-2 rounded-sm" />
                <Button title="Rounded MD" styles="px-4 py-2 rounded-md" />
                <Button title="Rounded FULL" styles="px-4 py-2 rounded-full" />
            </div>
        </div>
    )
}
export default Landing;
