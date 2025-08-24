export default function Toggle({ className, checked, clickFn }: 
    { className?: string, checked: boolean, clickFn: () => void }
) {
    return (
        <label className={`toggle ${className} p-1`}>
            <input type="checkbox" onChange={clickFn} checked={checked} />
            <span className="toggle-slider rounded-full h-full"></span>
        </label>
    )
};