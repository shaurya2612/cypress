'use client';
import { useSubscriptionModal } from '@/src/lib/providers/subscription-modal-provider';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { useSupabaseUser } from '@/src/lib/providers/supabase-user-provider';
import { formatPrice } from '@/src/lib/utils';
import { Button } from '../ui/button';
import Loader from './Loader';
import { Price, ProductWithPrice } from '@/src/lib/supabase/supabase.types';
import { useToast } from '../ui/use-toast';

interface SubscriptionModalProps {
    products: ProductWithPrice[];
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ products }) => {
    const { open, setOpen } = useSubscriptionModal();
    const { toast } = useToast();
    const { subscription } = useSupabaseUser();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useSupabaseUser();

    const onClickContinue = async (price: Price) => {
        //STRIPE
        () => {}
    };

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            {subscription?.status === 'active' ? (
                <DialogContent>Already on a paid plan!</DialogContent>
            ) : (
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upgrade to a Pro Plan</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        To access Pro features you need to have a paid plan.
                    </DialogDescription>
                    {products.length
                        ? products.map((product) => (
                            <div
                                className="
                  flex
                  justify-between
                  items-center
                  "
                                key={product.id}
                            >
                                {product.prices?.map((price) => (
                                    <React.Fragment key={price.id}>
                                        <b className="text-3xl text-foreground">
                                            {formatPrice(price)} / <small>{price.interval}</small>
                                        </b>
                                        <Button
                                            onClick={() => onClickContinue(price)}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? <Loader /> : 'Upgrade ✨'}
                                        </Button>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))
                        : ''}
                    {/* No Products Available */}
                </DialogContent>
            )}
        </Dialog>
    );
};

export default SubscriptionModal;
